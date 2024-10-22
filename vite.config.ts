import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), dts(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
      external: ['react', 'react/jsx-runtime', 'react-dom', /\style.css$/],
    },
    target: 'es2022',
  },
})
