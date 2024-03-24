import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
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
  resolve: {
    alias: {
      '@': fileURLToPath(join(dirname(import.meta.url), './src')),
    },
  },
})
