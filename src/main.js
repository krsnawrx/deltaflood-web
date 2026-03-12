import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

gsap.registerPlugin(ScrollTrigger)

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

// Starfield
const starGeometry = new THREE.BufferGeometry()
const starCount = 10000
const starPositions = new Float32Array(starCount * 3)
for(let i = 0; i < starCount * 3; i += 3) {
  let x, y, z
  do {
    x = (Math.random() - 0.5) * 100
    y = (Math.random() - 0.5) * 100
    z = (Math.random() - 0.5) * 100
  } while(Math.sqrt(x*x + y*y + z*z) < 5)
  
  starPositions[i] = x
  starPositions[i + 1] = y
  starPositions[i + 2] = z
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 })
const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

// Satellite
let satellite
const gltfLoader = new GLTFLoader()

gltfLoader.load('/src/assets/satellite.glb', (gltf) => {
  satellite = gltf.scene
  satellite.scale.set(0.02, 0.02, 0.02)
  satellite.position.set(5, 2, 0)
  satellite.visible = false
  scene.add(satellite)
})

// Mouse state
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

// Scroll animations
ScrollTrigger.create({
  trigger: '#satellite',
  start: 'top center',
  onEnter: () => {
    const showSatellite = () => {
      if(!satellite) {
        setTimeout(showSatellite, 100)
        return
      }
      satellite.visible = true
      satellite.position.set(5, 2, 0)
      gsap.to(satellite.position, {
        x: 2,
        y: 0.5,
        z: 0,
        duration: 2,
        ease: 'power2.out'
      })
      gsap.to(earth.position, {
        x: -1,
        duration: 2,
        ease: 'power2.out'
      })
    }
    showSatellite()
  },
  onLeaveBack: () => {
    if(!satellite) return
    satellite.visible = false
    gsap.to(earth.position, {
      x: 0,
      duration: 1
    })
  }
})

  // Parallax values
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2

  // Drag rotation
  if(isDragging) {
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    }
    earth.rotation.y += deltaMove.x * 0.005
    earth.rotation.x += deltaMove.y * 0.005
    previousMousePosition = { x: e.clientX, y: e.clientY }
  }
})

// Animation loop
function animate() {
  requestAnimationFrame(animate)

  // Auto rotation (slow, stops feeling when dragging)
  if(!isDragging) {
    earth.rotation.y += 0.001
  }

  // Parallax
  stars.rotation.x += (mouseY * 0.03 - stars.rotation.x) * 0.05
  stars.rotation.y += (mouseX * 0.03 - stars.rotation.y) * 0.05
  earth.position.x += (mouseX * 0.08 - earth.position.x) * 0.05
  earth.position.y += (-mouseY * 0.08 - earth.position.y) * 0.05

  renderer.render(scene, camera)
}

animate()

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})