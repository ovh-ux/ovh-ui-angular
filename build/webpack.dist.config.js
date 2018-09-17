const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    devtool: "#source-map",
    output: {
        path: path.resolve(".", "dist"),
        filename: "oui-angular.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new webpack.optimize.ModuleConcatenationPlugin(), // Enable scope hoisting
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]
});
