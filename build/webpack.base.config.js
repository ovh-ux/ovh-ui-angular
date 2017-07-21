import path from 'path'
import webpack from 'webpack'
import formatter from 'eslint-friendly-formatter'

const fallback = [path.join(__dirname, 'node_modules')]

const exclude = [/node_modules/, /dist/]

export default {
  entry: {
    component: ['./src/index.js']
  },
  output: {
    path: path.resolve('.', 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback,
    alias: {
      src: path.resolve('.', 'src'),
      build: path.resolve(__dirname)
    }
  },
  resolveLoader: {
    fallback
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude }
    ],
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude },
      { test: /\.(html|svg)$/, loader: 'html?interpolate&minimize', exclude }
    ]
  },
  eslint: {
    formatter
  }
}
