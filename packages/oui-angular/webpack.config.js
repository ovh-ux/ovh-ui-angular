const merge = require("webpack-merge");
const path = require("path");

const webpackConfig = require(__dirname, path.resolve("../../build/webpack.dist.config"));

module.exports = merge(webpackConfig, {
    context: __dirname,
    output: {
        filename: "oui-angular.js"
    }
});
