import { type RandomSource } from './randomSource'
import { RandomCore } from '../randomCore'

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
}
