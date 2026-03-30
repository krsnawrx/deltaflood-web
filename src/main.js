import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { latLongToVector3 } from './utils/latLongToVector3.js'
import { Water } from 'three/examples/jsm/objects/Water.js'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load', () => {
  const sections = ['hero', 'satellite', 'patna', 'demo', 'model', 'impact', 'outro']
  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      console.log(`#${id}: top=${Math.round(rect.top + window.scrollY)}, height=${Math.round(el.offsetHeight)}`)
    }
  })
  console.log('total page height:', document.body.scrollHeight)
})

/* ============================
   SCENE SETUP
============================ */

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('webgl'),
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.outputColorSpace = THREE.SRGBColorSpace

camera.position.z = 3

/* ============================
   EARTH
============================ */

const textureLoader = new THREE.TextureLoader()

const earthTexture = textureLoader.load('/src/assets/earth.jpg')
earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const earthGeometry = new THREE.SphereGeometry(1, 64, 64)

const earthMaterial = new THREE.MeshPhongMaterial({
  map: earthTexture,
  shininess: 25,
  transparent: true,
  opacity: 1
})

const earth = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earth)

/* ============================
   ATMOSPHERE
============================ */

const atmosphereGeometry = new THREE.SphereGeometry(1.02, 64, 64)

const atmosphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x3fa9f5,
  transparent: true,
  opacity: 0.25,
  side: THREE.BackSide
})

const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
scene.add(atmosphere)

/* ============================
   STARFIELD
============================ */

const starGeometry = new THREE.BufferGeometry()

const starCount = 8000
const starPositions = new Float32Array(starCount * 3)

for (let i = 0; i < starCount * 3; i += 3) {
  let x, y, z
  do {
    x = (Math.random() - 0.5) * 200
    y = (Math.random() - 0.5) * 200
    z = (Math.random() - 0.5) * 200
  } while (Math.sqrt(x * x + y * y + z * z) < 5)

  starPositions[i] = x
  starPositions[i + 1] = y
  starPositions[i + 2] = z
}

starGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(starPositions, 3)
)

const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.05,
  sizeAttenuation: true
})

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

/* ============================
   AUDIO
============================ */

const spaceAudio = new Audio('/src/assets/sounds/space.mp3')
spaceAudio.loop = true
spaceAudio.volume = 0
spaceAudio.preload = "auto"

const underwaterAudio = new Audio('/src/assets/sounds/underwater.mp3')
underwaterAudio.loop = true
underwaterAudio.volume = 0
underwaterAudio.preload = "auto"

let audioUnlocked = false

const unlockAudio = () => {
  if (audioUnlocked) return
  audioUnlocked = true
  spaceAudio.play()
    .then(() => {
      gsap.to(spaceAudio, { volume: 0.4, duration: 3 })
    })
    .catch(e => console.log("Audio blocked:", e))
}

window.addEventListener('mousemove', unlockAudio, { once: true })
window.addEventListener('pointerdown', unlockAudio, { once: true })
window.addEventListener('scroll', unlockAudio, { once: true })

window.addEventListener('soundToggled', (e) => {
  const { isMuted } = e.detail
  gsap.to(spaceAudio, { volume: isMuted ? 0 : 0.4, duration: 1 })
  gsap.to(underwaterAudio, { volume: isMuted ? 0 : 0.5, duration: 1 })
})

/* ============================
   SATELLITE
============================ */

const satellitePivot = new THREE.Object3D()
satellitePivot.rotation.z = -Math.PI / 6
satellitePivot.rotation.x = Math.PI / 12
satellitePivot.scale.set(0, 0, 0) // hidden on load
scene.add(satellitePivot)

let satellite
let bands = []
let satelliteOrbitActive = false

const gltfLoader = new GLTFLoader()

gltfLoader.load('/src/assets/satellite.glb', (gltf) => {

  satellite = gltf.scene
  satellite.scale.set(1.5, 1.5, 1.5)

  satellite.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1
      child.material.roughness = 0.3
    }
  })

  satellite.position.set(-5, 0, 0)
  satellite.rotation.y = Math.PI / 2
  satellite.rotation.z = Math.PI / 8

  satellitePivot.add(satellite)

  const planeGeom = new THREE.PlaneGeometry(0.8, 0.01)
  const colors = [0xff2222, 0x22ff22, 0x4444ff]

  colors.forEach((color) => {
    const mat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    })

    const mesh = new THREE.Mesh(planeGeom, mat)
    mesh.rotation.x = Math.PI / 2
    mesh.position.y = -0.05
    satellite.add(mesh)
    bands.push(mesh)
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#satellite",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        satelliteOrbitActive = true
        gsap.to(satellitePivot.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'power2.out' })
      },
      onLeaveBack: () => {
        satelliteOrbitActive = false
        gsap.to(satellitePivot.scale, { x: 0, y: 0, z: 0, duration: 0.5 })
      }
    }
  })

  tl.to(satellite.position, { x: -1.8 })
    .addLabel("split")
    .to(bands[0].position, { z: -0.08 }, "split")
    .to(bands[2].position, { z: 0.08 }, "split")
    .to(bands.map(b => b.material), { opacity: 0.4 }, "split")

})

/* ============================
   WATER SHADER
============================ */

const waterShader = new Water(
  new THREE.PlaneGeometry(10000, 10000),
  {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load('/src/assets/waternormals.jpg', (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    }),
    sunDirection: new THREE.Vector3(1, 1, 0).normalize(),
    sunColor: 0xffffff,
    waterColor: 0x0064b4,
    distortionScale: 8,
    fog: false,
    alpha: 1.0
  }
)

waterShader.rotation.x = -Math.PI / 2
waterShader.position.y = -2
waterShader.visible = false
scene.add(waterShader)

/* ============================
   ZOOM TO PATNA
============================ */

const PATNA_LAT = 25.5941
const PATNA_LON = 85.1376
const patnaVector = latLongToVector3(PATNA_LAT, PATNA_LON)

const zoomTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#patna",
    start: "1% top",
    end: "30% top",
    scrub: 1.5,

    onEnter: () => {
      if (audioUnlocked) {
        gsap.to(spaceAudio, { volume: 0.1, duration: 2 })
      }
      if (satellite) {
        gsap.to(satellitePivot.scale, { x: 0, y: 0, z: 0, duration: 1, ease: 'power2.in' })
        gsap.to(bands.map(b => b.material), { opacity: 0, duration: 0.5 })
        setTimeout(() => satelliteOrbitActive = false, 1000)
      }
      gsap.to(earth.rotation, {
        y: 3.29,
        x: 0.34,
        duration: 2.5,
        ease: "power2.inOut"
      })
    },

    onLeaveBack: () => {
      if (audioUnlocked) {
        spaceAudio.play().catch(() => { })
        gsap.to(spaceAudio, { volume: 0.4, duration: 2 })
      }
      satelliteOrbitActive = true
      gsap.to(satellitePivot.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'power2.out' })
    }
  }
})

zoomTl.to(camera.position, {
  z: 1.9,
  duration: 1,
  ease: "power3.inOut"
}, 0.2)

zoomTl.to(starMaterial, {
  opacity: 0,
  duration: 0.3
}, 0.2)

zoomTl.to(atmosphereMaterial, {
  opacity: 0.6,
  duration: 0.5
}, 0.3)

// Phase 2: Water transition
ScrollTrigger.create({
  trigger: "#patna",
  start: "30% top",
  once: false,

  onEnter: () => {
    gsap.to(earthMaterial, { opacity: 0, duration: 1.5 })
    gsap.to(atmosphereMaterial, { opacity: 0, duration: 1 })
    gsap.to(starMaterial, { opacity: 0, duration: 0.5 })
    waterShader.visible = true
    window._waterVisible = true
    gsap.to(camera.position, { x: 0, y: 5, z: 0, duration: 1.5, ease: 'power2.inOut' })
    gsap.to(camera.rotation, { x: -Math.PI / 2, duration: 1.5, ease: 'power2.inOut' })
    if (audioUnlocked) {
      underwaterAudio.play().catch(() => { })
      gsap.fromTo(underwaterAudio, { volume: 0 }, { volume: 0.5, duration: 3 })
    }
  },

  onLeaveBack: () => {
    waterShader.visible = false
    window._waterVisible = false
    gsap.to(earthMaterial, { opacity: 1, duration: 1 })
    gsap.to(atmosphereMaterial, { opacity: 0.25, duration: 1 })
    gsap.to(starMaterial, { opacity: 1, duration: 0.5 })
    gsap.to(camera.position, { x: 0, y: 0, z: 1.9, duration: 1.5 })
    gsap.to(camera.rotation, { x: 0, duration: 1.5 })
    if (audioUnlocked) {
      gsap.to(underwaterAudio, {
        volume: 0, duration: 2, onComplete: () => {
          underwaterAudio.pause()
          underwaterAudio.currentTime = 0
        }
      })
    }
  }
})

/* ============================
   LIGHTING
============================ */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffffff, 2.5)
sunLight.position.set(8, 2, 5)
scene.add(sunLight)

const headlamp = new THREE.PointLight(0xffffff, 2)
camera.add(headlamp)
scene.add(camera)

/* ============================
   MOUSE INTERACTION
============================ */

let isDragging = false
let mouseX = 0
let mouseY = 0
let previousMousePosition = { x: 0, y: 0 }
let currentSection = 'hero'

ScrollTrigger.create({
  trigger: "#patna",
  start: "10% top",
  onEnter: () => currentSection = 'patna',
  onLeaveBack: () => currentSection = 'hero'
})

window.addEventListener('mousedown', (e) => {
  isDragging = true
  previousMousePosition = { x: e.clientX, y: e.clientY }
})

window.addEventListener('mouseup', () => isDragging = false)

window.addEventListener('mousemove', (e) => {
  if (currentSection === 'hero') {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  }

  if (isDragging && currentSection === 'hero') {
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    }
    earth.rotation.y += deltaMove.x * 0.005
    earth.rotation.x += deltaMove.y * 0.005
    earth.rotation.x = Math.max(
      -Math.PI / 2,
      Math.min(Math.PI / 2, earth.rotation.x)
    )
  }

  previousMousePosition = { x: e.clientX, y: e.clientY }
})

/* ============================
   ANIMATION LOOP
============================ */

function animate() {
  requestAnimationFrame(animate)

  if (!isDragging && currentSection === 'hero') {
    earth.rotation.y += 0.001
  }

  atmosphere.rotation.y = earth.rotation.y
  atmosphere.rotation.x = earth.rotation.x

  if (satelliteOrbitActive && satellite) {
    satellitePivot.rotation.y += 0.004
  }

  if (waterShader.visible) {
    waterShader.material.uniforms['time'].value += 0.5 / 60.0
  }

  if (currentSection === 'hero') {
    stars.rotation.x += (mouseY * 0.02 - stars.rotation.x) * 0.05
    stars.rotation.y += (mouseX * 0.02 - stars.rotation.y) * 0.05
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  }

  renderer.render(scene, camera)
}

animate()

window.addEventListener('keypress', (e) => {
  if (e.key === 'r') {
    console.log('rotation Y:', earth.rotation.y, 'rotation X:', earth.rotation.x)
  }
})

/* ============================
   RESIZE
============================ */

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})