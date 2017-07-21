import baseWebpackConfig from './webpack.base.config'

export default {
    frameworks: ['jasmine'],

    webpack: {
      devtool: '#inline-source-map',
      module: {
        ...baseWebpackConfig.module
      },
      resolve: baseWebpackConfig.resolve,
      eslint: baseWebpackConfig.eslint
    },

    webpackMiddleware: {
      stats: {
        colors: true
      },
      noInfo: true
    },

    reporters: ['nyan', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcov', 'text-summary' ],
      fixWebpackSourcePaths: true,
      dir: 'coverage',
      'report-config': {
        html: {
          subdir: 'report-html'
        },
        lcov: {
          subdir: 'report-lcov'
        }
      },
      thresholds: {
        statements: 90,
        lines: 90,
        branches: 90,
        functions: 90
      }
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-nyan-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],

    browsers: ['PhantomJS'],
    browserNoActivityTimeout: 100000
}