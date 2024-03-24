import { expect, describe, test, vi } from 'vitest'
import { defaultRandomSource } from '@/defaultRandomSource'

const random = vi.spyOn(Math, 'random')

describe('test default random source', () => {
  test('test source generates right values', () => {
    random.mockReturnValue(0)
    expect(defaultRandomSource.getRandomValue()).equal(0)

    random.mockReturnValue(1)
    expect(defaultRandomSource.getRandomValue()).equal(1)

    random.mockReturnValue(0.5)
    expect(defaultRandomSource.getRandomValue()).equal(0.5)
  })
})
