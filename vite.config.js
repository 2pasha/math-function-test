import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: uncomment and replace 'repo-name' with your actual repository name
  // base: '/repo-name/',
})
