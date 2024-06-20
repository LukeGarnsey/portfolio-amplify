import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    open: true,
    proxy: {
      '/send-email': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/lg.png': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },       
    }
  }
})
