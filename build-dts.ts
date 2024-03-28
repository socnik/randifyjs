import { dirname, join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { $ } from 'execa'

const npxCommand = 'pnpm exec'
const outputFileName = toAbsolutePath('./dist/index.d.ts')
const tempBuildDir = toAbsolutePath('./.tmp')
const tsconfigFileName = toAbsolutePath('./tsconfig.build.json')

function toAbsolutePath(relativePath: string) {
  return fileURLToPath(join(dirname(import.meta.url), relativePath))
}

async function main() {
  console.log('=== Declaration files compiling started ===')

  console.log('1. Run tsc...')
  await $`${npxCommand} tsc --project ${tsconfigFileName}`

  console.log('2. Run aliases processor...')
  await $`${npxCommand} tsc-alias --project ${tsconfigFileName}`

  console.log('3. Run declarations bundler...')
  await $`${npxCommand} dts-bundle-generator --project ${tsconfigFileName} --out-file ${outputFileName} ${join(tempBuildDir, './index.d.ts')}`

  console.log(
    `4. Finished! Created "${basename(outputFileName)}" declaration file in "${dirname(outputFileName)}".`
  )

  console.log('=== Dts build end ===')
}

main()
