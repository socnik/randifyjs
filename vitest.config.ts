import { defineConfig, mergeConfig } from 'vitest/config'
import ViteConfig from './vite.config'

export default mergeConfig(
  ViteConfig,
  defineConfig({
    test: {
      root: './src',
      include: ['*.test.ts', '**/__tests__/*.ts', '**/__tests__/*.test.ts'],
    },
  })
)
