import { type RandomSource } from '@/randomSource'
import { RandomCore } from '@/randomCore'

export class Random {
  #source: RandomSource
  #core: RandomCore

  constructor(source: RandomSource) {
    this.#source = source
    this.#core = new RandomCore()
  }

  randNative(): number {
    return this.#source.getRandomValue()
  }

  rand(min: number, max: number, step: number = 1): number {
    return RandomCore.executeAlgorithm(this.#core.rand(min, max, step), () =>
      this.#source.getRandomValue()
    )
  }

  shuffle<T>(sequence: T[]): T[] {
    return RandomCore.executeAlgorithm(this.#core.shuffle(sequence), () =>
      this.#source.getRandomValue()
    )
  }

  choices<T>(sequence: T[], choicesNumber: number): T[] | null {
    return RandomCore.executeAlgorithm(
      this.#core.choices(sequence, choicesNumber),
      () => this.#source.getRandomValue()
    )
  }

  choice<T>(sequence: T[]): T | null {
    return RandomCore.executeAlgorithm(this.#core.choice(sequence), () =>
      this.#source.getRandomValue()
    )
  }
}
