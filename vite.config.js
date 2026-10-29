import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  // Permite abrir el servidor de desarrollo a través de un túnel (p. ej. Cloudflare)
  server: { allowedHosts: true },
})
