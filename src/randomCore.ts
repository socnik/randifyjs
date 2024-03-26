type RandomAlgorithmGenerator = Generator<void, number, number>

export class RandomCore {
  *rand(min: number, max: number, step: number): RandomAlgorithmGenerator {
    if (min >= max)
      throw new Error('Maximum number greater or equal minimal number')

    const randomValue = yield
    const range = (max - min) / step

    return Math.floor(randomValue * range) * step + min
  }

  static executeAlgorithm(
    algorithmInstance: RandomAlgorithmGenerator,
    randomNumberCallback: () => number
  ): number {
    let randomNumber: number = 0

    while (true) {
      const iteration = algorithmInstance.next(randomNumber)

      if (iteration.done) return iteration.value

      randomNumber = randomNumberCallback()
    }
  }

  static async executeAlgorithmAsync(
    algorithmInstance: RandomAlgorithmGenerator,
    randomNumberCallback: () => Promise<number>
  ): Promise<number> {
    let randomNumber: number = 0

    while (true) {
      const iteration = algorithmInstance.next(randomNumber)

      if (iteration.done) return iteration.value

      randomNumber = await randomNumberCallback()
    }
  }
}
