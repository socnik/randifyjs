import { test, describe, expect } from 'vitest'
import { RandomCore } from '@/randomCore'

describe('RandomCore class', () => {
  const random = new RandomCore()

  test('rand method return values between min and max', () => {
    expect(RandomCore.executeAlgorithm(random.rand(-3, 15, 1), () => 0)).equal(
      -3
    )

    expect(RandomCore.executeAlgorithm(random.rand(-3, 15, 1), () => 1)).equal(
      15
    )

    expect(RandomCore.executeAlgorithm(random.rand(-3, 15, 1), () => 0))
      .greaterThanOrEqual(-3)
      .and.lessThanOrEqual(15)
  })

  test('rand method step argument', () => {
    expect([0, 2, 4, 6, 8, 10]).includes(
      RandomCore.executeAlgorithm(random.rand(0, 10, 2), () => 0.78612)
    )

    expect([0, 3, 6, 9]).includes(
      RandomCore.executeAlgorithm(random.rand(0, 10, 3), () => 0.12345)
    )

    expect([0, 3, 6]).includes(
      RandomCore.executeAlgorithm(random.rand(0, 8, 3), () => 0.12345)
    )
  })

  test('rand method should to throw error, when min > max', () => {
    expect(() =>
      RandomCore.executeAlgorithm(random.rand(5, 4, 1), () => 0)
    ).toThrowError()
  })

  test('correct shuffle elements in array', () => {
    expect(
      RandomCore.executeAlgorithm(random.shuffle([0, 1, 2, 3, 4, 5]), () => 0.5)
    ).toMatchInlineSnapshot(`
      [
        2,
        3,
        1,
        4,
        0,
        5,
      ]
    `)
  })
})
