import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/apna/',   // <-- ye zaruri hai (repo name ke hisaab se)
})