import fs from 'fs'
import path from 'path'
import protractorConfig from '../../build/protractor.conf'

exports.config = Object.assign(protractorConfig, {
  specs: [path.join('.', 'e2e', '**', '*.spec.js')],
  baseUrl: fs.readFileSync('.preview-host').toString()
})
