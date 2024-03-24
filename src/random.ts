import { type RandomSource } from './randomSource'

export class Random {
  #source: RandomSource

  constructor(source: RandomSource) {
    this.#source = source
  }

  randNative(): number {
    return this.#source.getRandomValue()
  }

  rand(min: number, max: number, step: number = 1): number {
    const randomValue = this.#source.getRandomValue()
    const range = (max - min) / step

    return Math.floor(randomValue * range) * step + min
  }
}
