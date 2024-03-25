export type RandomSource = {
  getRandomValue(): number
}

export type AsyncRandomSource = {
  getRandomValue(): Promise<number>
}

export function defineRandomSource(randomSource: RandomSource): RandomSource {
  return randomSource
}

export function defineAsyncRandomSource(
  randomSource: AsyncRandomSource
): AsyncRandomSource {
  return randomSource
}

export function syncToAsyncRandomSource(
  randomSource: RandomSource
): AsyncRandomSource {
  return {
    getRandomValue: async () => randomSource.getRandomValue(),
  }
}
