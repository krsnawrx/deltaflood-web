import { defineConfig } from 'vite'

export default defineConfig({
  // Adjusted for your repo name: deltaflood-web
  base: '/deltaflood-web/',
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  build: {
    // Ensures large textures/shaders are not inlined as base64
    assetsInlineLimit: 0,
    // Helps with debugging the production build if needed
    sourcemap: true
  }
})