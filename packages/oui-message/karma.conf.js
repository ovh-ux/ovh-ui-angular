import { configure as configureKarma } from '../../build/karma.single.conf'

module.exports = (config) => {
  const karmaConfig = configureKarma(__dirname)

  karmaConfig.files.unshift(require.resolve('angular-mocks'))
  karmaConfig.files.unshift(require.resolve('angular'))
  karmaConfig.webpack.devtool = 'inline-source-map'

  config.set({
    ...karmaConfig
  })
}
