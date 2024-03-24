import { test, describe, vi, expect, suite } from 'vitest'
import { Random } from '@/random'
import { type RandomSource } from '@/randomSource'

const mockRandomSource: RandomSource = {
  getRandomValue: () => 0,
}

const randomValueFn = vi.spyOn(mockRandomSource, 'getRandomValue')

describe('random class random methods', () => {
  const random = new Random(mockRandomSource)

  test('randNative return value should equals getRandomValue output', () => {
    randomValueFn.mockReturnValue(0)
    expect(random.randNative()).equal(0)

    randomValueFn.mockReturnValue(1)
    expect(random.randNative()).equal(1)

    randomValueFn.mockReturnValue(0.5)
    expect(random.randNative()).equal(0.5)
  })
})
