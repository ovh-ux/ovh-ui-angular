import path from 'path'
import baseWebpackConfig from './webpack.base.config'
import baseKarmaConfig from './karma.base.conf'

export default (config) => {
  const loaders = baseWebpackConfig.module.loaders
  loaders.push({
    test: /\.js$/,
    loader: 'istanbul-instrumenter',
    exclude: [
      /node_modules/,
      /(provider|config|run|vendor|spec)\.js$/
    ],
    query: {
      esModules: true
    }
  })

  config.set({
    ...baseKarmaConfig,

    preprocessors: {
      [require.resolve('angular')]: ['webpack', 'sourcemap'],
      [require.resolve('angular-mocks')]: ['webpack', 'sourcemap'],
      '../packages/oui-angular/src/index.spec.js': ['webpack', 'sourcemap']
    },

    files: [
      require.resolve('angular'),
      require.resolve('angular-mocks'),
      '../packages/oui-angular/src/index.spec.js'
    ],

    webpack: {
      module: {
        loaders
      }
    }
  })
}
