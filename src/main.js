import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

gsap.registerPlugin(ScrollTrigger)

// 1. Scene setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.getElementById('webgl'), 
  antialias: true 
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
camera.position.z = 3

// 2. Earth
const textureLoader = new THREE.TextureLoader()
const earthTexture = textureLoader.load('/src/assets/earth.jpg')
const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
const earthMaterial = new THREE.MeshPhongMaterial({ 
  map: earthTexture,
  shininess: 15
})
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earth)

// 3. Stars (Parallax layers)
const starGeometry = new THREE.BufferGeometry()
const starCount = 8000
const starPositions = new Float32Array(starCount * 3)
for(let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 150
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })
const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

// 4. Satellite System + Spectral Bands
const satellitePivot = new THREE.Object3D()
scene.add(satellitePivot)

let satellite
let bands = []
const gltfLoader = new GLTFLoader()

gltfLoader.load('/src/assets/satellite.glb', (gltf) => {
  satellite = gltf.scene
  
  //  Make it much bigger and shiny
  satellite.scale.set(0.25, 0.25, 0.25) 
  satellite.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1
      child.material.roughness = 0.3
    }
  })
  
  satellite.position.set(5, 0, 0) // Start off-screen
  satellitePivot.add(satellite)

  //  Create the Spectral Planes (Red, Green, NIR)
  const planeGeom = new THREE.PlaneGeometry(0.5, 0.8)
  const colors = [0xff0000, 0x00ff00, 0x0000ff] 
  
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
    mesh.position.y = -0.3
    satellite.add(mesh)
    bands.push(mesh)
  })

  //  Combined Scrub Animation (Entry + Band Split)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "35% top",
      scrub: 1,
    }
  })

  tl.to(satellite.position, { x: 1.8 }) // Move into orbit
    .addLabel("split")
    .to(bands[0].position, { x: -0.6 }, "split") // Red slides left
    .to(bands[2].position, { x: 0.6 }, "split")  // NIR slides right
    .to(bands.map(b => b.material), { opacity: 0.6 }, "split") // All bands fade in

}, undefined, (err) => console.error(err))

// 5. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)
const sunLight = new THREE.DirectionalLight(0xffffff, 2.5)
sunLight.position.set(5, 3, 5)
scene.add(sunLight)

// 6. Global Mouse/Interaction State
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
  // Capture values for Parallax (Normalized -1 to +1)
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2

  // Handle Dragging
  if(isDragging) {
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    }
    earth.rotation.y += deltaMove.x * 0.005
    earth.rotation.x += deltaMove.y * 0.005
  }
  previousMousePosition = { x: e.clientX, y: e.clientY }
})

// 7. Animation loop
function animate() {
  requestAnimationFrame(animate)
  
  // Auto-rotate Earth
  if(!isDragging) earth.rotation.y += 0.001
  
  // Orbit the satellite
  satellitePivot.rotation.y += 0.004

  // --- RE-ADDED PARALLAX MATH ---
  // Stars move slightly opposite to mouse
  stars.rotation.x += (mouseY * 0.02 - stars.rotation.x) * 0.05
  stars.rotation.y += (mouseX * 0.02 - stars.rotation.y) * 0.05
  
  // Earth shifts slightly to follow mouse
  earth.position.x += (mouseX * 0.1 - earth.position.x) * 0.05
  earth.position.y += (-mouseY * 0.1 - earth.position.y) * 0.05

  renderer.render(scene, camera)
}
animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})