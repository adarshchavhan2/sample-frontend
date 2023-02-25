import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 5500,
    proxy: {
      '/api/v1': 'https://sample-blogs.vercel.app'
    }
  },
  plugins: [react()],
})
