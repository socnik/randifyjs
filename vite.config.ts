import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

function toAbsolutePath(relativePath: string) {
  return fileURLToPath(join(dirname(import.meta.url), relativePath))
}

export default defineConfig({
  build: {
    lib: {
      entry: toAbsolutePath('./src/index.ts'),
      fileName: 'randifyjs',
      formats: ['es', 'cjs'],
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': toAbsolutePath('./src'),
    },
  },
})
