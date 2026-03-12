import * as THREE from 'three'
import { gsap } from 'gsap'

// Scene setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.getElementById('webgl'), 
  antialias: true 
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x000000, 1)
camera.position.z = 3

// Earth
const textureLoader = new THREE.TextureLoader()
const earthTexture = textureLoader.load('/src/assets/earth.jpg')

const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
const earthMaterial = new THREE.MeshPhongMaterial({ 
  map: earthTexture,
  shininess: 25
})
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earth)

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffffff, 2)
sunLight.position.set(5, 3, 5)
scene.add(sunLight)

// Animation loop
function animate() {
  requestAnimationFrame(animate)
  earth.rotation.y += 0.001
  renderer.render(scene, camera)
}

animate()

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Starfield
const starGeometry = new THREE.BufferGeometry()
const starCount = 10000
const starPositions = new Float32Array(starCount * 3)

for(let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 100
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 })
const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

// Mouse drag rotation
let isDragging = false
let previousMousePosition = { x: 0, y: 0 }

window.addEventListener('mousedown', () => isDragging = true)
window.addEventListener('mouseup', () => isDragging = false)
window.addEventListener('mousemove', (e) => {
  if(!isDragging) return
  const deltaMove = {
    x: e.clientX - previousMousePosition.x,
    y: e.clientY - previousMousePosition.y
  }
  earth.rotation.y += deltaMove.x * 0.005
  earth.rotation.x += deltaMove.y * 0.005
  previousMousePosition = { x: e.clientX, y: e.clientY }
})

window.addEventListener('mousemove', (e) => {
  previousMousePosition = { x: e.clientX, y: e.clientY }
})