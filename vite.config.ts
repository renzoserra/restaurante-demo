import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/restaurante-demo/',
  plugins: [react()],
  assetsInclude: ['**/*.csv'],
})
