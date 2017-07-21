import merge from 'webpack-merge'
import webpackConfig from '../../build/webpack.dist.config'

export default merge(webpackConfig, {
  context: __dirname,
  output: {
    filename: 'oui-angular.js'
  }
})
