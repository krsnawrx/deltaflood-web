import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

gsap.registerPlugin(ScrollTrigger)

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
  shininess: 25
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

let audioUnlocked = false

window.addEventListener('mousemove', () => {

  if (!audioUnlocked) {

    audioUnlocked = true

    spaceAudio.play()
      .then(() => {
        gsap.to(spaceAudio, { volume: 0.4, duration: 3 })
      })
      .catch(e => console.log("Audio blocked:", e))

  }

}, { once: true })

window.addEventListener('mousedown', () => {

  if (spaceAudio.paused) {

    spaceAudio.play()
    gsap.to(spaceAudio, { volume: 0.4, duration: 3 })

  }

}, { once: true })


/* ============================
   SATELLITE
============================ */

const satellitePivot = new THREE.Object3D()

satellitePivot.rotation.z = Math.PI / 6
satellitePivot.rotation.x = Math.PI / 12

scene.add(satellitePivot)

let satellite
let bands = []

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

  satellite.position.set(5, 0, 0)
  satellite.rotation.y = Math.PI / 2
  satellite.rotation.z = Math.PI / 8

  satellitePivot.add(satellite)

  const planeGeom = new THREE.PlaneGeometry(0.8, 0.01)

  const colors = [
    0xff2222,
    0x22ff22,
    0x4444ff
  ]

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
      trigger: "body",
      start: "top top",
      end: "35% top",
      scrub: 1
    }

  })

  tl.to(satellite.position, { x: 1.8 })
    .addLabel("split")

    .to(bands[0].position, { z: -0.08 }, "split")
    .to(bands[2].position, { z: 0.08 }, "split")

    .to(
      bands.map(b => b.material),
      { opacity: 0.4 },
      "split"
    )

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

window.addEventListener('mousedown', (e) => {

  isDragging = true
  previousMousePosition = { x: e.clientX, y: e.clientY }

})

window.addEventListener('mouseup', () => isDragging = false)

window.addEventListener('mousemove', (e) => {

  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2

  if (isDragging) {

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

  if (!isDragging) {
    earth.rotation.y += 0.001
  }

  atmosphere.rotation.y = earth.rotation.y

  if (satellite) {
    satellitePivot.rotation.y += 0.004
  }

  stars.rotation.x += (mouseY * 0.02 - stars.rotation.x) * 0.05
  stars.rotation.y += (mouseX * 0.02 - stars.rotation.y) * 0.05

  // camera parallax instead of moving earth

  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
  camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05

  camera.lookAt(0, 0, 0)

  renderer.render(scene, camera)

}

animate()


/* ============================
   RESIZE
============================ */

window.addEventListener('resize', () => {

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)

})