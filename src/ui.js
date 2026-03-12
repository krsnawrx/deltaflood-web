import { gsap } from 'gsap';

/**
 * UI Overlay System for DeltaFlood
 */

// --- LOADER ---
export function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.display = 'none';
            }
        });
    });

    // Fallback: hide loader after 5 seconds if window.load hasn't fired
    setTimeout(() => {
        if (loader.style.display !== 'none') {
            gsap.to(loader, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        }
    }, 5000);
}

// --- SOUND TOGGLE ---
export function initSoundToggle() {
    const btn = document.getElementById('sound-toggle');
    if (!btn) return;

    let isMuted = false; // sound starts ON after first interaction

    const speakerIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm12.518-12.001l-1.42 1.42C19.018 7.438 20.5 9.43 20.5 12c0 2.57-1.482 4.562-3.512 6.581l1.42 1.42C21.018 17.562 23 15.43 23 12c0-3.43-1.983-5.563-4.593-8.001zm-3 3l-1.42 1.42a5.986 5.986 0 011.91 4.581c0 1.76-.75 3.34-1.91 4.581l1.42 1.42a7.994 7.994 0 002.503-6.001c0-2.31-1.01-4.41-2.503-6.001z"/>
  </svg>`;

    const muteIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm13.518-4L22 14.59 20.59 16 18 13.41 15.41 16 14 14.59 16.59 12 14 9.41 15.41 8 18 10.59 20.59 8 22 9.41 19.407 12z"/>
  </svg>`;

    // set initial icon
    btn.innerHTML = speakerIcon;

    btn.addEventListener('click', () => {
        isMuted = !isMuted;

        // update icon
        btn.innerHTML = isMuted ? muteIcon : speakerIcon;

        // notify main.js
        const event = new CustomEvent('soundToggled', {
            detail: { isMuted }
        });

        window.dispatchEvent(event);
    });
}

// --- SCROLL PROGRESS ---
export function initScrollProgress() {
    const progress = document.getElementById('scroll-progress');
    if (!progress) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.height = scrolled + "%";
    });
}

// --- CUSTOM CURSOR ---
export function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1
        });

        gsap.to(follower, {
            x: mouseX,
            y: mouseY,
            duration: 0.3
        });
    });

    // Create ripples on click
    window.addEventListener('mousedown', (e) => {
        createRipple(e.clientX, e.clientY);
    });

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);

        gsap.to(ripple, {
            scale: 4,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                ripple.remove();
            }
        });
    }
}

// --- SATELLITE BRIEFING ---
export function initBriefingCards() {
    const cards = document.querySelectorAll('.briefing-card');
    if (!cards.length) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#satellite",
            start: "top bottom",
            end: "top center",
            scrub: 1
        }
    });

    cards.forEach((card, i) => {
        tl.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out"
        }, i * 0.4);
    });
}

// --- SPECTRAL BAND UI ---
export function initSpectralUI() {
    const labels = document.querySelectorAll('.band-label');
    const description = document.querySelector('.spectral-description');
    if (!labels.length || !description) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#satellite",
            start: "top bottom",
            end: "top center", // Should match main.js satellite movement
            scrub: 1
        }
    });

    // Animate labels matching the plane deployment order in main.js
    labels.forEach((label, i) => {
        // We start these appearing slightly after the briefing cards
        tl.to(label, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        }, 3.0 + (i * 0.3)); // Offset ensures it happens deeper into the scroll
    });

    // Description text fades in last
    tl.to(description, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 4.0);
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initSoundToggle();
    initScrollProgress();
    initCustomCursor();
    initBriefingCards();
    initSpectralUI();
});
