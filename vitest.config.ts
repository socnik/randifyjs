import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vitest/config'
import ViteConfig from './vite.config'

function toAbsolutePath(relativePath: string) {
  return fileURLToPath(join(dirname(import.meta.url), relativePath))
}

export default mergeConfig(
  ViteConfig,
  defineConfig({
    test: {
      root: toAbsolutePath('./src'),
      include: ['**/*.test.ts'],
      benchmark: {
        include: ['**/*.bench.ts'],
      },
    },
  })
)
