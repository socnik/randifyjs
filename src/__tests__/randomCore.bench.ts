import { describe, bench } from 'vitest'
import { RandomCore } from '@/randomCore'

const randomGenerator = () => Math.random()

describe('benchmark of RandomCore', () => {
  const random = new RandomCore()
  const bigArray = new Array(10_000_000)
    .fill(0)
    .map((_) =>
      RandomCore.executeAlgorithm(
        random.rand(0, 10_000_000, 50),
        randomGenerator
      )
    )

  bench('benchmark of rand method', () => {
    RandomCore.executeAlgorithm(random.rand(0, 10_000_000, 50), randomGenerator)
  })

  bench('benchmark of shuffle method', () => {
    RandomCore.executeAlgorithm(random.shuffle(bigArray), randomGenerator)
  })

  bench('benchmark of choices method', () => {
    RandomCore.executeAlgorithm(random.choices(bigArray, 1000), randomGenerator)
  })

  bench('benchmark of choice method', () => {
    RandomCore.executeAlgorithm(random.choice(bigArray), randomGenerator)
  })
})
