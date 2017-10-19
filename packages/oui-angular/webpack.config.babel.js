import merge from 'webpack-merge'
import path from 'path'

const webpackConfig = require(__dirname, path.resolve('../../build/webpack.dist.config'))

export default merge(webpackConfig, {
  context: __dirname,
  output: {
    filename: 'oui-angular.js'
  }
})
