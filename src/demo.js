/**
 * demo.js — Live flood detection via Hugging Face Gradio API
 * Uses geotiff.js to preprocess .tif files in the browser before sending.
 * This avoids the 73% upload wall by sending pixel arrays (~4MB) instead of raw files (~350MB).
 */

import { fromArrayBuffer } from 'geotiff';

const API_BASE = 'https://krsnawrx-deltaflood-api.hf.space';
const GRADIO_API = `${API_BASE}/gradio_api`;

/* ── DOM refs ──────────────────────────────────────────────────────── */
let beforeInput, afterInput, runBtn, resultsEl, loadingEl, errorEl;
let satCanvas, overlayCanvas, statValueEl;
let progressContainer, progressBar, progressText;
let beforeFile = null, afterFile = null;
let isProcessing = false;

/* ── Initialise ────────────────────────────────────────────────────── */
function init() {
  beforeInput = document.querySelector('#upload-before input[type="file"]');
  afterInput = document.querySelector('#upload-after input[type="file"]');
  runBtn = document.getElementById('run-detection');
  resultsEl = document.getElementById('live-results');
  loadingEl = document.getElementById('live-loading');
  errorEl = document.getElementById('live-error');
  satCanvas = document.getElementById('result-satellite');
  overlayCanvas = document.getElementById('result-overlay');
  statValueEl = document.getElementById('live-stat-value');
  progressContainer = document.getElementById('progress-bar-container');
  progressBar = document.getElementById('progress-bar');
  progressText = document.getElementById('progress-text');

  if (!beforeInput || !afterInput || !runBtn) return;

  beforeInput.addEventListener('change', (e) => {
    beforeFile = e.target.files[0] || null;
    showFilename('#upload-before', beforeFile);
    checkReady();
  });

  afterInput.addEventListener('change', (e) => {
    afterFile = e.target.files[0] || null;
    showFilename('#upload-after', afterFile);
    checkReady();
  });

  ['#upload-before', '#upload-after'].forEach(sel => {
    const card = document.querySelector(sel);
    if (!card) return;
    card.addEventListener('dragover', e => { e.preventDefault(); card.classList.add('drag-over'); });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', e => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (!file) return;
      const input = card.querySelector('input[type="file"]');
      const dt = new DataTransfer();
      dt.items.add(file);
      input.files = dt.files;
      input.dispatchEvent(new Event('change'));
    });
  });

  runBtn.addEventListener('click', runInference);
}

/* ── Helpers ────────────────────────────────────────────────────────── */
function showFilename(selector, file) {
  const nameEl = document.querySelector(`${selector} .upload-filename`);
  const labelEl = document.querySelector(`${selector} .upload-label`);
  const iconEl = document.querySelector(`${selector} .upload-icon`);
  if (nameEl && file) {
    nameEl.textContent = file.name;
    nameEl.style.display = 'block';
    if (labelEl) labelEl.style.opacity = '0.45';
    if (iconEl) iconEl.style.color = '#00d2ff';
  } else if (nameEl) {
    nameEl.textContent = '';
    nameEl.style.display = 'none';
    if (labelEl) labelEl.style.opacity = '1';
    if (iconEl) iconEl.style.color = '';
  }
}

function checkReady() {
  runBtn.disabled = !(beforeFile && afterFile) || isProcessing;
}

function setError(msg) {
  if (!errorEl) return;
  errorEl.textContent = msg || '';
  errorEl.style.display = msg ? 'block' : 'none';
}

function setProgress(pct, label) {
  const rounded = Math.round(pct);
  if (progressBar) progressBar.style.width = `${rounded}%`;
  if (progressText) progressText.textContent = label || `Processing: ${rounded}%`;
}

function showProgress(visible) {
  if (progressContainer) progressContainer.style.display = visible ? 'flex' : 'none';
}

/* ── Read .tif in browser and downsample 3x ─────────────────────────── */
async function readTif(file) {
  const buffer = await file.arrayBuffer();
  const tiff = await fromArrayBuffer(buffer);
  const image = await tiff.getImage();

  const width = image.getWidth();
  const height = image.getHeight();

  const data = await image.readRasters({ samples: [0, 1, 2, 3] });

  const newW = Math.floor(width / 3);
  const newH = Math.floor(height / 3);

  const result = [];
  for (let y = 0; y < newH; y++) {
    const row = [];
    for (let x = 0; x < newW; x++) {
      const pixel = [];
      for (let b = 0; b < 4; b++) {
        const val = data[b][y * 3 * width + x * 3];
        pixel.push(Math.min(Math.max(val / 3000.0, 0), 1));
      }
      row.push(pixel);
    }
    result.push(row);
  }
  return JSON.stringify(result);
}

/* ── Run inference ─────────────────────────────────────────────────── */
async function runInference() {
  if (!beforeFile || !afterFile) return;

  isProcessing = true;
  resultsEl.style.display = 'none';
  setError('');
  runBtn.disabled = true;
  runBtn.textContent = 'PROCESSING…';
  showProgress(true);
  setProgress(0, 'Reading before flood image...');

  try {
    setProgress(10, 'Reading before flood image...');
    const beforeJson = await readTif(beforeFile);

    setProgress(40, 'Reading after flood image...');
    const afterJson = await readTif(afterFile);

    setProgress(65, 'Sending to AI model...');

    const queueRes = await fetch(`${GRADIO_API}/call/run_inference`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [beforeJson, afterJson] })
    });

    if (!queueRes.ok) {
      const errBody = await queueRes.text().catch(() => '');
      throw new Error(`Queue failed (${queueRes.status}): ${errBody.slice(0, 200)}`);
    }

    const { event_id } = await queueRes.json();
    setProgress(75, 'AI model running...');

    const resultRes = await fetch(`${GRADIO_API}/call/run_inference/${event_id}`);
    if (!resultRes.ok) throw new Error(`Result fetch failed (${resultRes.status})`);

    const text = await resultRes.text();
    const lines = text.split('\n').filter(l => l.startsWith('data:'));
    if (!lines.length) throw new Error('No data in response');

    const lastData = lines[lines.length - 1].replace('data: ', '').trim();
    const result = JSON.parse(lastData);

    const satelliteData = result[0];
    const maskData = result[1];
    const floodStat = result[2];

    setProgress(100, 'Done');
    await renderResults(satelliteData, maskData, floodStat);

  } catch (err) {
    console.error('[DeltaFlood] Inference error:', err);
    setError(`Inference failed — ${err.message}`);
  } finally {
    isProcessing = false;
    loadingEl.style.display = 'none';
    showProgress(false);
    runBtn.disabled = false;
    runBtn.textContent = 'RUN DETECTION';
    checkReady();
  }
}

/* ── Resolve Gradio image reference to a drawable URL ──────────────── */
function resolveImageUrl(data) {
  if (!data) return '';
  if (typeof data === 'string') {
    if (data.startsWith('data:')) return data;
    if (data.startsWith('http')) return data;
    return `${GRADIO_API}/file=${data}`;
  }
  // Object with url field — use directly
  if (data.url && data.url.startsWith('http')) return data.url;
  if (data.path) return `${GRADIO_API}/file=${data.path}`;
  return '';
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.error('Image load failed:', src, e)
      reject(new Error(`Failed to load image: ${src}`));
    }
    img.src = src;
  });
}

/* ── Canvas rendering with cyan composite overlay ──────────────────── */
async function renderResults(satData, maskData, floodStat) {
  const satUrl = resolveImageUrl(satData);
  const maskUrl = resolveImageUrl(maskData);
  console.log('satData:', JSON.stringify(satData))
  console.log('satUrl:', satUrl)
  console.log('maskUrl:', maskUrl)

  const [satImg, maskImg] = await Promise.all([
    loadImage(satUrl),
    loadImage(maskUrl)
  ]);

  resultsEl.style.visibility = 'hidden';
  resultsEl.style.display = 'block';

  const hostW = satCanvas.parentElement.clientWidth - 32;
  const w = Math.round(hostW * window.devicePixelRatio);
  const h = Math.round(w * 3 / 4);

  [satCanvas, overlayCanvas].forEach(c => {
    c.width = w;
    c.height = h;
  });

  const satCtx = satCanvas.getContext('2d');
  satCtx.drawImage(satImg, 0, 0, w, h);

  const ovCtx = overlayCanvas.getContext('2d');
  ovCtx.drawImage(satImg, 0, 0, w, h);

  const off = document.createElement('canvas');
  off.width = w;
  off.height = h;
  const offCtx = off.getContext('2d');
  offCtx.drawImage(maskImg, 0, 0, w, h);

  const imageData = offCtx.getImageData(0, 0, w, h);
  const px = imageData.data;

  for (let i = 0; i < px.length; i += 4) {
    const brightness = (px[i] + px[i + 1] + px[i + 2]) / 3;
    if (brightness > 40) {
      px[i] = 0;
      px[i + 1] = 210;
      px[i + 2] = 255;
      px[i + 3] = 180;
    } else {
      px[i + 3] = 0;
    }
  }

  offCtx.putImageData(imageData, 0, 0);
  ovCtx.globalCompositeOperation = 'screen';
  ovCtx.drawImage(off, 0, 0);
  ovCtx.globalCompositeOperation = 'source-over';

  statValueEl.textContent = typeof floodStat === 'string' ? floodStat : `${floodStat} sq km`;
  resultsEl.style.visibility = 'visible';
  resultsEl.classList.remove('live-fade-in');
  void resultsEl.offsetWidth;
  resultsEl.classList.add('live-fade-in');
}

/* ── Boot ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);