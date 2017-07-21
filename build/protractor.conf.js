import os from 'os'

export default {
  allScriptsTimeout: 14000,
  maxSessions: os.cpus().length,
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: os.cpus().length
  },
  directConnect: true,
  framework: 'jasmine',
  rootElement: 'html',
  restartBrowserBetweenTests: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 5000,
    isVerbose: true,
    includeStackTrace: true,
    print: () => {}
  },
  onPrepare: () => {
    require('babel-register')
    const Spec = require('jasmine-spec-reporter')
    jasmine.getEnv().addReporter(new Spec({ displayStacktrace: 'all' }))
  }
}
