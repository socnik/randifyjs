import { test, describe, vi, expect } from 'vitest'
import { Random } from '@/syncApi/random'
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

  test('rand method return values between min and max', () => {
    randomValueFn.mockReturnValue(0)
    expect(random.rand(-3, 15)).equal(-3)

    randomValueFn.mockReturnValue(1)
    expect(random.rand(-3, 15)).equal(15)

    randomValueFn.mockReturnValue(0.5)
    expect(random.rand(-3, 15)).greaterThanOrEqual(-3).and.lessThanOrEqual(15)
  })

  test('rand method step argument', () => {
    randomValueFn.mockReturnValue(0.78612)
    expect([0, 2, 4, 6, 8, 10]).includes(random.rand(0, 10, 2))

    randomValueFn.mockReturnValue(0.12345)
    expect([0, 3, 6, 9]).includes(random.rand(0, 10, 3))

    randomValueFn.mockReturnValue(0.12345)
    expect([0, 3, 6]).includes(random.rand(0, 8, 3))
  })
})
