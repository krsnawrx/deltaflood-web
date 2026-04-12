import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

    let isMuted = false;

    const speakerIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm12.518-12.001l-1.42 1.42C19.018 7.438 20.5 9.43 20.5 12c0 2.57-1.482 4.562-3.512 6.581l1.42 1.42C21.018 17.562 23 15.43 23 12c0-3.43-1.983-5.563-4.593-8.001zm-3 3l-1.42 1.42a5.986 5.986 0 011.91 4.581c0 1.76-.75 3.34-1.91 4.581l1.42 1.42a7.994 7.994 0 002.503-6.001c0-2.31-1.01-4.41-2.503-6.001z"/>
  </svg>`;

    const muteIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.889 16H2V8h3.889l5.294-4.332C11.644 3.292 12 3.613 12 4.09v15.82c0 .477-.356.798-.817.422L5.889 16zm13.518-4L22 14.59 20.59 16 18 13.41 15.41 16 14 14.59 16.59 12 14 9.41 15.41 8 22 9.41 19.407 12z"/>
  </svg>`;

    btn.innerHTML = speakerIcon;

    btn.addEventListener('click', () => {
        isMuted = !isMuted;
        btn.innerHTML = isMuted ? muteIcon : speakerIcon;
        window.dispatchEvent(new CustomEvent('soundToggled', { detail: { isMuted } }));
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

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    });

    window.addEventListener('mousedown', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);

        gsap.to(ripple, {
            scale: 4,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => ripple.remove()
        });
    });
}

// --- SATELLITE BRIEFING CARDS ---
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
            end: "top center",
            scrub: 1
        }
    });

    labels.forEach((label, i) => {
        tl.to(label, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        }, 3.0 + (i * 0.3));
    });

    tl.to(description, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 4.0);
}

// --- PATNA NARRATION ---
export function initPatnaNarration() {
    const lines = gsap.utils.toArray('.narration-line');
    if (!lines.length) return;

    lines.forEach(line => {
        ScrollTrigger.create({
            trigger: line,
            start: 'top 60%',
            end:   'top 40%',
            onEnter:     () => gsap.to(line, { opacity: 1, duration: 1 }),
            onLeave:     () => gsap.to(line, { opacity: 0, duration: 1 }),
            onEnterBack: () => gsap.to(line, { opacity: 1, duration: 1 }),
            onLeaveBack: () => gsap.to(line, { opacity: 0, duration: 1 })
        });
    });
}

// --- DASHBOARD FADE-IN ---
export function initDashboardFadeIn() {
    const targets = document.querySelectorAll(
        '.dashboard-header, .image-card, .stat-card'
    );
    if (!targets.length) return;

    // Start all hidden
    targets.forEach(el => el.classList.add('dash-hidden'));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger based on DOM order
                    const all = Array.from(targets);
                    const idx = all.indexOf(entry.target);
                    const delay = idx * 150; // ms stagger

                    setTimeout(() => {
                        entry.target.classList.remove('dash-hidden');
                        entry.target.classList.add('dash-visible');
                        entry.target.style.animationDelay = '0ms';
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    targets.forEach(el => observer.observe(el));
}

// --- OUTRO / CREDITS (Cinematic Deep-Dive) ---
export function initOutro() {
    const outro = document.querySelector('#outro');
    if (!outro) return;

    const title     = outro.querySelector('.outro-title');
    const subtitles = outro.querySelectorAll('.outro-subtitle');
    const authorGrp = outro.querySelector('.outro-author');
    const chipGrp   = outro.querySelector('.outro-chips');
    const chips     = outro.querySelectorAll('.tech-chip');
    const linksGrp  = outro.querySelector('.outro-links');
    const footerGrp = outro.querySelector('.outro-footer');
    const groups    = outro.querySelectorAll('.outro-group');

    // --- 1. Scrub-based background fade ---
    // Ties the overlay darkening directly to scroll speed (scrub: 1).
    gsap.fromTo(outro,
        { backgroundColor: 'rgba(0, 0, 0, 0)' },
        {
            backgroundColor: 'rgba(2, 6, 18, 0.92)',
            ease: 'none',
            scrollTrigger: {
                trigger: outro,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
            }
        }
    );

    // --- 2. Credits float-up stagger ---
    // All groups start hidden (opacity: 0 via CSS). We initialise y offset.
    gsap.set(groups, { y: 50 });

    // Collect the ordered credit elements for staggered reveal
    const creditElements = [
        title,
        ...subtitles,
        authorGrp,
        chipGrp,
        linksGrp,
        footerGrp
    ].filter(Boolean);

    creditElements.forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: outro,
                    start: 'top 60%',
                    end: 'top 15%',
                    toggleActions: 'play none none reverse',
                },
                delay: i * 0.2,
            }
        );
    });

    // Also reveal any parent group that holds the elements
    groups.forEach((grp) => {
        gsap.fromTo(grp,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: outro,
                    start: 'top 65%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    });

    // --- 3. Tech tags individual glow-in (last to light up) ---
    if (chips.length) {
        chips.forEach((chip, i) => {
            gsap.fromTo(chip,
                { opacity: 0, y: 20, scale: 0.92 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: outro,
                        start: 'top 45%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: 0.6 + (i * 0.1),   // extra 0.6s base delay
                }
            );
        });
    }
}

// --- INIT ALL ---
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initSoundToggle();
    initScrollProgress();
    initCustomCursor();
    initBriefingCards();
    initSpectralUI();
    initPatnaNarration();
    initDashboardFadeIn();
    initOutro();
});