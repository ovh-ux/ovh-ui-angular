import merge from 'webpack-merge'

const env = process.env.NODE_ENV || 'dist'

export default merge(require(`../../build/webpack.${env}.config`).default, {
  context: __dirname
})
