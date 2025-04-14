import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const base = '/tic-tac-toe-game/';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
})
