import { RandomSource } from './randomSource'

export const defaultRandomSource: RandomSource = {
  getRandomValue: () => Math.random(),
}
