type RandomAlgorithmGenerator<T> = Generator<void, T, number>

export class RandomCore {
  *rand(
    min: number,
    max: number,
    step: number
  ): RandomAlgorithmGenerator<number> {
    if (min > max) throw new Error('Maximum number greater of minimal number')

    const randomValue = yield
    const range = (max - min) / step

    return Math.floor(randomValue * range) * step + min
  }

  *shuffle<T>(sequence: T[]): RandomAlgorithmGenerator<T[]> {
    const output: T[] = [...sequence]

    for (let i = 0; i < output.length; i++) {
      const randomIndex = yield* this.rand(i, output.length - 1, 1)
      const randomItem = output[randomIndex]
      output[randomIndex] = output[i]
      output[i] = randomItem
    }

    return output
  }

  *choices<T>(
    sequence: T[],
    choicesNumber: number
  ): RandomAlgorithmGenerator<T[] | null> {
    if (sequence.length == 0) return null

    const output: T[] = []

    for (let i = 0; i < choicesNumber; i++) {
      const randomIndex = yield* this.rand(0, sequence.length - 1, 1)
      output.push(sequence[randomIndex])
    }

    return output
  }

  *choice<T>(sequence: T[]): RandomAlgorithmGenerator<T | null> {
    if (sequence.length === 0) return null

    const randomIndex = yield* this.rand(0, sequence.length - 1, 1)

    return sequence[randomIndex]
  }

  static executeAlgorithm<T>(
    algorithmInstance: RandomAlgorithmGenerator<T>,
    randomNumberCallback: () => number
  ): T {
    let randomNumber: number = 0

    while (true) {
      const iteration = algorithmInstance.next(randomNumber)

      if (iteration.done) return iteration.value

      randomNumber = randomNumberCallback()
    }
  }

  static async executeAlgorithmAsync<T>(
    algorithmInstance: RandomAlgorithmGenerator<T>,
    randomNumberCallback: () => Promise<number>
  ): Promise<T> {
    let randomNumber: number = 0

    while (true) {
      const iteration = algorithmInstance.next(randomNumber)

      if (iteration.done) return iteration.value

      randomNumber = await randomNumberCallback()
    }
  }
}
