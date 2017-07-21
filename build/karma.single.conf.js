import path from 'path'
import baseWebpackConfig from './webpack.base.config'
import baseKarmaConfig from './karma.base.conf'

export const configure = (packagePath) => {
  const loaders = baseWebpackConfig.module.loaders
  loaders.push({
    test: /\.js$/,
    loader: 'istanbul-instrumenter',
    include: [
      path.join(packagePath, 'src')
    ],
    exclude: [
      /node_modules/,
      /(provider|config|run|vendor|spec)\.js$/
    ],
    query: {
      esModules: true
    }
  })

  return {
    ...baseKarmaConfig,

    preprocessors: {
      '**/*.js': ['webpack', 'sourcemap']
    },

    files: [
      'src/**/*.spec.js',
      'src/index.js'
    ],

    webpack: {
      module: {
        loaders
      }
    }
  }
}

export default configure(__dirname)
