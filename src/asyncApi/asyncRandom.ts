import { type AsyncRandomSource } from '@/randomSource'
import { RandomCore } from '@/randomCore'

export class AsyncRandom {
  #source: AsyncRandomSource
  #core: RandomCore

  constructor(source: AsyncRandomSource) {
    this.#source = source
    this.#core = new RandomCore()
  }

  async randNative(): Promise<number> {
    return await this.#source.getRandomValue()
  }

  async rand(min: number, max: number, step: number = 1): Promise<number> {
    return await RandomCore.executeAlgorithmAsync(
      this.#core.rand(min, max, step),
      () => this.#source.getRandomValue()
    )
  }
}
