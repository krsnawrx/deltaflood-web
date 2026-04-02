/**
 * fab.js — Floating Action Button tray controller
 * Handles: FAB search overlay + sign-out confirmation popup
 */

// ── helpers ──────────────────────────────────────────────────────────
function openOverlay(el) {
  el.classList.add('overlay--open');
  el.setAttribute('aria-hidden', 'false');
}
function closeOverlay(el) {
  el.classList.remove('overlay--open');
  el.setAttribute('aria-hidden', 'true');
}

// ── SEARCH FAB ────────────────────────────────────────────────────────
function initSearchFAB() {
  const fabBtn     = document.getElementById('fab-search');
  const overlay    = document.getElementById('search-overlay');
  const closeBtn   = document.getElementById('search-close');
  const input      = document.getElementById('search-input');
  const allResults = document.querySelectorAll('.search-result-item');
  if (!fabBtn || !overlay) return;

  overlay.setAttribute('aria-hidden', 'true');

  // Open
  fabBtn.addEventListener('click', () => {
    openOverlay(overlay);
    setTimeout(() => input && input.focus(), 120);
  });

  // Close via ✕ button
  closeBtn && closeBtn.addEventListener('click', () => closeOverlay(overlay));

  // Close by clicking the backdrop (not the modal itself)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay(overlay);
  });

  // Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('overlay--open')) {
      closeOverlay(overlay);
    }
  });

  // Live filter
  input && input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    allResults.forEach(item => {
      const match = item.textContent.toLowerCase().includes(q);
      item.style.display = match ? '' : 'none';
    });
  });

  // Result click — close & (future) navigate
  allResults.forEach(item => {
    item.addEventListener('click', () => {
      closeOverlay(overlay);
      // Placeholder: could scroll to the region or update the dashboard
      console.log('Selected region:', item.dataset.region);
    });
  });
}

// ── SIGN-OUT FAB ──────────────────────────────────────────────────────
function initSignOutFAB() {
  const fabBtn     = document.getElementById('fab-signout');
  const overlay    = document.getElementById('signout-overlay');
  const cancelBtn  = document.getElementById('signout-cancel');
  const confirmBtn = document.getElementById('signout-confirm');
  if (!fabBtn || !overlay) return;

  overlay.setAttribute('aria-hidden', 'true');

  // Open confirmation popup
  fabBtn.addEventListener('click', () => openOverlay(overlay));

  // Cancel → simply close
  cancelBtn && cancelBtn.addEventListener('click', () => closeOverlay(overlay));

  // Backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay(overlay);
  });

  // Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('overlay--open')) {
      closeOverlay(overlay);
    }
  });

  // Confirm → actual sign-out action
  confirmBtn && confirmBtn.addEventListener('click', () => {
    confirmBtn.textContent = 'Signing out…';
    confirmBtn.disabled = true;
    // Fade the whole page out before "redirect"
    document.body.style.transition = 'opacity 0.8s ease';
    document.body.style.opacity = '0';
    setTimeout(() => {
      // In production this would be: auth.signOut() or router.push('/login')
      // For demo, reload the page
      window.location.reload();
    }, 900);
  });
}

// ── BOOT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSearchFAB();
  initSignOutFAB();
});
