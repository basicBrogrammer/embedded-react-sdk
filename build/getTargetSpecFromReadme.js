import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Visit https://docs.gusto.com/embedded-payroll/openapi and click on the version you like
const TARGET_VERSION_LINK =
  'https://docs.gusto.com/embedded-payroll/openapi/65e753a71b26800063c6e39d'

console.log('Fetching spec from: ', TARGET_VERSION_LINK)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

await fetch(TARGET_VERSION_LINK)
  .then(response => response.text())
  .then(rawData => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsed = JSON.parse(rawData)
    const outputPath = path.resolve(__dirname, '../openapi/api.spec.json')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(`Version of API: ${String(parsed.info.version)}. Writing it to ${outputPath}`)

    fs.writeFileSync(outputPath, rawData)
  })
