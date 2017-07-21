import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base.config'

export default merge(baseConfig, {
  devtool: 'sourcemap',
  output: {
    publicPath: null
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV
    }),
    // TODO: Find a way to get it back, this plugin doesn't support npm link pretty well and
    // lerna does npm link on each dependencies between packages.
    // Example: oui-radio-group > oui-radio
    // https://github.com/webpack/webpack/issues/1082
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
