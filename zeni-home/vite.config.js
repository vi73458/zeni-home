import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zeni-home/', // 👈 nome do seu repositório no GitHub
})
