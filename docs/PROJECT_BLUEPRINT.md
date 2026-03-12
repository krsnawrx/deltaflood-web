# DeltaFlood — Project Blueprint

## Goal

Build an **Awwwards-style immersive storytelling website**
demonstrating AI flood detection using satellite imagery.

The experience should feel **cinematic, interactive, and technical**.

Inspired by studios like:
- Igloo.inc
- Awwwards interactive storytelling sites
- NASA visualization experiences

---

# Core Narrative

The user travels from **space → satellite → flood → AI detection → impact**.

The experience is driven entirely by **scroll-based animation**.

---

# Locked Experience Flow

### 1. Hero — Earth from Space
Interactive 3D globe using Three.js.

Features:
- NASA Blue Marble Earth texture
- Starfield background
- Mouse drag rotation
- Subtle parallax
- Space ambience audio

---

### 2. Satellite Observation

A satellite enters orbit around Earth.

Features:
- 3D satellite model
- Orbital animation
- Information overlays

Key explanation:
- How satellites capture Earth imagery
- Revisit time
- Observation process

---

### 3. Spectral Data Capture

Satellite imagery splits into spectral bands.

Visual elements:
- RGB channels
- NIR channel
- Animated band separation

Purpose:
Explain how multispectral satellite data enables flood detection.

---

### 4. Zoom to Patna

Camera dives from space to **Patna, Bihar**.

Coordinates:

Lat: 25.5941° N  
Lon: 85.1376° E

Landing environment:

- Flooded terrain
- Water shader surface
- Casualty statistics
- Underwater ambience

---

### 5. Live AI Flood Detection

User sees Sentinel-2 flood imagery.

AI inference runs using HuggingFace model.

Output:

- Flood mask overlay
- Flood coverage %
- Confidence score

---

### 6. The Model

Visualization of the **U-Net architecture** used for segmentation.

Animations:

- Encoder layers
- Bottleneck
- Decoder layers

Metrics:

IoU score = 0.6477

---

### 7. Impact Visualization

3D terrain showing flood spread.

Information shown:

- Flooded land area
- Displaced population
- Infrastructure impact

---

### 8. Outro

Water recedes.

Earth returns to calm.

Final screen:

"Built by Krishna Kumar"

Links:

- GitHub
- HuggingFace
- LinkedIn