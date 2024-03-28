import { Random } from '@/random'
import { defaultRandomSource } from '@/randomSources'

const random = new Random(defaultRandomSource)

export const randNative = random.randNative.bind(random)
export const rand = random.rand.bind(random)
export const shuffle = random.shuffle.bind(random)
export const choices = random.choices.bind(random)
export const choice = random.choice.bind(random)
