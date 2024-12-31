import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/Demo-ReactApp/', // Replace <repository-name> with your repo name
  plugins: [react(), svgr()],

});