import { defaultRandomSource } from '@/syncApi/defaultRandomSource'
import { syncToAsyncRandomSource } from '@/randomSource'

export const defaultAsyncRandomSource =
  syncToAsyncRandomSource(defaultRandomSource)
