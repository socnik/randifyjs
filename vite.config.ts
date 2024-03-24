import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'randifyjs',
      formats: ['es', 'cjs'],
    },
    copyPublicDir: false,
  },
})
