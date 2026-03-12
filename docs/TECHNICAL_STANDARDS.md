# DeltaFlood Technical Standards

These rules ensure the project remains performant and maintainable.

All AI-generated code must follow these rules.

---

# Core Stack

Build Tool:
Vite

Rendering:
Three.js

Animation:
GSAP + ScrollTrigger

Language:
Vanilla JavaScript (no frameworks)

---

# Architecture

Use modular structure:

src/
components/
EarthScene.js
SatelliteScene.js
PatnaScene.js
FloodDemo.js

assets/
textures/
models/
sounds/

---

# Performance Rules

Earth sphere:

Segments max:
64

Example:

new THREE.SphereGeometry(1,64,64)

---

# Rendering Loop

Always use:

requestAnimationFrame()

Never use setInterval for animation.

---

# Assets

All assets stored inside:

src/assets/

Example:

src/assets/earth.jpg  
src/assets/satellite.glb  
src/assets/sounds/space.mp3

---

# Model Loading

Use GLTFLoader.

Preferred format:

.glb

---

# Texture Handling

Use THREE.TextureLoader.

Large textures should be compressed if needed.

---

# Coordinate System

Patna coordinates:

25.5941° N  
85.1376° E

Convert to radians before mapping to globe.

---

# Animation

All scroll-based animations must use:

GSAP ScrollTrigger

Prefer:

scrub: true

for smooth scroll-driven animation.

---

# Code Style

Rules:

- avoid global variables
- separate components logically
- comment complex math
- avoid magic numbers