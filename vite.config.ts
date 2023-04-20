import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// optimizeDeps: {
//   exclude: ['js-big-decimal']}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
})
