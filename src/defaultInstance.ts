import { Random } from '@/syncApi/random'
import { defaultRandomSource } from '@/syncApi/defaultRandomSource'

const random = new Random(defaultRandomSource)

export const randNative = random.randNative.bind(random)
export const rand = random.rand.bind(random)
