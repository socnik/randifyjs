import { describe, expect, test } from 'vitest'

import {
  RandomSource,
  AsyncRandomSource,
  defineRandomSource,
  defineAsyncRandomSource,
  syncToAsyncRandomSource,
} from '@/randomSource'

const mockRandomSource: RandomSource = {
  getRandomValue: () => 0,
}

const mockAsyncRandomSource: AsyncRandomSource = {
  getRandomValue: async () => 0,
}

describe('test helper-functions for RandomSource and AsyncRandomSource interfaces', () => {
  test('defineRandomSource return the same object', () => {
    expect(defineRandomSource(mockRandomSource)).equal(mockRandomSource)
  })

  test('defineAsyncRandomSource return the same object', () => {
    expect(defineAsyncRandomSource(mockAsyncRandomSource)).equal(
      mockAsyncRandomSource
    )
  })

  test('syncToAsyncRandomSource return correct AsyncRandomSource', async () => {
    const asyncRandomSource = syncToAsyncRandomSource(mockRandomSource)
    expect(await asyncRandomSource.getRandomValue()).equal(0)
  })
})
