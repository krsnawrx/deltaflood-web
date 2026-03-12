# DeltaFlood AI Prompt Template

Use this template when asking AI to generate code for this project.

---

# Context

Project: DeltaFlood

Goal:
Create an immersive web experience demonstrating AI flood detection
using satellite imagery.

Tech stack:

- Three.js
- GSAP ScrollTrigger
- Vite
- Vanilla JavaScript

Reference documents:

docs/PROJECT_BLUEPRINT.md  
docs/TECHNICAL_STANDARDS.md  
docs/UI_UX_VIBE.md  

---

# Current Feature

Describe the feature you want to build.

Example:

Implement the satellite orbit scene.

Requirements:

- Satellite model loaded using GLTFLoader
- Satellite orbits Earth using a pivot object
- Animation tied to scroll using GSAP ScrollTrigger
- Spectral bands split into RGB/NIR planes

---

# Constraints

Follow these rules:

- Use modern Three.js APIs
- Do not use deprecated methods
- Maintain high performance
- Keep geometry complexity low

Earth sphere segments must not exceed:

64

---

# Output Format

Provide:

1. Full file code
2. Clear comments explaining logic
3. Any required imports
4. Compatible with Vite project structure

---

# Example Request

Using the above context, generate the Three.js code for:

Satellite orbit animation with spectral band visualization
triggered by scroll.

Ensure the satellite revolves around Earth and bands split during scroll.