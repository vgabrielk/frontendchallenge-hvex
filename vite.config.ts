import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  test: {
    globals: true,
    environment: 'jsdom',
    hidden: true,
    setupFiles: 'src/setupTests.ts',
  }
})
