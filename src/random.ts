import { type RandomSource } from './randomSource'

export class Random {
  #source: RandomSource

  constructor(source: RandomSource) {
    this.#source = source
  }

  randNative(): number {
    return this.#source.getRandomValue()
  }
}
