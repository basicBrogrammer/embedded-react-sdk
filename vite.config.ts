import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      name: 'embedded-react-sdk',
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
