import { defineRandomSource } from '@/randomSource'

export const defaultRandomSource = defineRandomSource({
  getRandomValue: () => Math.random(),
})
