import { Random } from '@/random'
import { defaultRandomSource } from '@/defaultRandomSource'

const random = new Random(defaultRandomSource)

export const randNative = random.randNative.bind(random)