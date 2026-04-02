/**
 * demo.js — Live flood detection via Hugging Face Gradio API
 * Handles file uploads, API calls, and canvas-composited result rendering.
 */

const API_BASE = 'https://krsnawrx-deltaflood-api.hf.space';

/* ── DOM refs ──────────────────────────────────────────────────────── */
let beforeInput, afterInput, runBtn, resultsEl, loadingEl, errorEl;
let satCanvas, overlayCanvas, statValueEl;
let beforeFile = null, afterFile = null;

/* ── Initialise ────────────────────────────────────────────────────── */
function init() {
  beforeInput  = document.querySelector('#upload-before input[type="file"]');
  afterInput   = document.querySelector('#upload-after input[type="file"]');
  runBtn       = document.getElementById('run-detection');
  resultsEl    = document.getElementById('live-results');
  loadingEl    = document.getElementById('live-loading');
  errorEl      = document.getElementById('live-error');
  satCanvas    = document.getElementById('result-satellite');
  overlayCanvas = document.getElementById('result-overlay');
  statValueEl  = document.getElementById('live-stat-value');

  if (!beforeInput || !afterInput || !runBtn) return;

  // File-change handlers
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

  // Drag-and-drop per card
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
      // Manually set file via DataTransfer
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
  const nameEl  = document.querySelector(`${selector} .upload-filename`);
  const labelEl = document.querySelector(`${selector} .upload-label`);
  const iconEl  = document.querySelector(`${selector} .upload-icon`);
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
  runBtn.disabled = !(beforeFile && afterFile);
}

function setError(msg) {
  if (!errorEl) return;
  errorEl.textContent = msg || '';
  errorEl.style.display = msg ? 'block' : 'none';
}

/* ── Gradio file upload ────────────────────────────────────────────── */
async function uploadFile(file) {
  const form = new FormData();
  form.append('files', file);
  const res = await fetch(`${API_BASE}/upload`, { method: 'POST', body: form });
  if (!res.ok) throw new Error(`Upload failed (${res.status})`);
  return res.json(); // returns array of server paths
}

/* ── Run inference ─────────────────────────────────────────────────── */
async function runInference() {
  if (!beforeFile || !afterFile) return;

  // UI → loading
  loadingEl.style.display = 'flex';
  resultsEl.style.display = 'none';
  setError('');
  runBtn.disabled = true;
  runBtn.textContent = 'PROCESSING…';

  try {
    /* Step 1 — upload both files */
    const [beforePaths, afterPaths] = await Promise.all([
      uploadFile(beforeFile),
      uploadFile(afterFile)
    ]);

    /* Step 2 — call /run/predict */
    const response = await fetch(`${API_BASE}/run/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [
          { path: beforePaths[0] },
          { path: afterPaths[0] }
        ],
        fn_index: 0
      })
    });

    if (!response.ok) throw new Error(`Prediction failed (${response.status})`);
    const result = await response.json();

    /* Step 3 — parse & render */
    const satelliteData = result.data[0]; // Satellite image
    const maskData      = result.data[1]; // Flood mask
    const floodStat     = result.data[2]; // Flooded-area string

    await renderResults(satelliteData, maskData, floodStat);

  } catch (err) {
    console.error('[DeltaFlood] Inference error:', err);
    setError(`Inference failed — ${err.message}`);
  } finally {
    loadingEl.style.display = 'none';
    runBtn.disabled = false;
    runBtn.textContent = 'RUN DETECTION';
    checkReady();
  }
}

/* ── Resolve Gradio image reference to a drawable URL ──────────────── */
function resolveImageUrl(data) {
  if (typeof data === 'string') {
    if (data.startsWith('data:'))  return data;          // base64
    if (data.startsWith('http'))   return data;          // absolute URL
    return `${API_BASE}/file=${data}`;                   // server path
  }
  if (data && data.url)  return data.url;
  if (data && data.path) return `${API_BASE}/file=${data.path}`;
  return String(data);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload  = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/* ── Canvas rendering with cyan composite overlay ──────────────────── */
async function renderResults(satData, maskData, floodStat) {
  const satUrl  = resolveImageUrl(satData);
  const maskUrl = resolveImageUrl(maskData);

  const [satImg, maskImg] = await Promise.all([
    loadImage(satUrl),
    loadImage(maskUrl)
  ]);

  // Compute pixel dimensions preserving 4:3
  const hostW = satCanvas.parentElement.clientWidth - 32; // minus card padding
  const w = Math.round(hostW * window.devicePixelRatio);
  const h = Math.round(w * 3 / 4);

  // Size both canvases
  [satCanvas, overlayCanvas].forEach(c => {
    c.width  = w;
    c.height = h;
  });

  /* ① Left canvas — satellite only */
  const satCtx = satCanvas.getContext('2d');
  satCtx.drawImage(satImg, 0, 0, w, h);

  /* ② Right canvas — satellite + cyan mask overlay */
  const ovCtx = overlayCanvas.getContext('2d');
  ovCtx.drawImage(satImg, 0, 0, w, h);

  // Off-screen canvas: draw mask, then re-colour flood pixels to cyan
  const off = document.createElement('canvas');
  off.width  = w;
  off.height = h;
  const offCtx = off.getContext('2d');
  offCtx.drawImage(maskImg, 0, 0, w, h);

  const imageData = offCtx.getImageData(0, 0, w, h);
  const px = imageData.data;

  for (let i = 0; i < px.length; i += 4) {
    const brightness = (px[i] + px[i + 1] + px[i + 2]) / 3;
    if (brightness > 40) {
      // Flood pixel → cyan
      px[i]     = 0;
      px[i + 1] = 210;
      px[i + 2] = 255;
      px[i + 3] = 180; // semi-transparent
    } else {
      px[i + 3] = 0;   // non-flood → transparent
    }
  }

  offCtx.putImageData(imageData, 0, 0);

  // Composite onto satellite using 'screen' blend
  ovCtx.globalCompositeOperation = 'screen';
  ovCtx.drawImage(off, 0, 0);
  ovCtx.globalCompositeOperation = 'source-over';

  /* ③ Stat */
  statValueEl.textContent = typeof floodStat === 'string' ? floodStat : `${floodStat}%`;

  /* ④ Reveal results with 1.5 s fade-in */
  resultsEl.classList.remove('live-fade-in');
  resultsEl.style.display = 'block';
  void resultsEl.offsetWidth; // reflow
  resultsEl.classList.add('live-fade-in');
}

/* ── Boot ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);