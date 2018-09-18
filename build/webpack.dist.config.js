const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    externals: {
        clipboard: "clipboard",
        "escape-string-regexp": "escape-string-regexp",
        flatpickr: "flatpickr",
        "popper.js": "popper.js"
    },
    output: {
        path: path.resolve(".", "dist"),
        filename: "oui-angular.min.js"
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new webpack.optimize.ModuleConcatenationPlugin() // Enable scope hoisting
    ]
});
