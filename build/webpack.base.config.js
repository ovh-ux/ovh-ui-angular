const formatter = require("eslint-friendly-formatter");
const webpack = require("webpack");
const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const exclude = [/node_modules/, /dist/];

module.exports = {
    mode: "development",
    entry: {
        component: ["./packages/oui-angular/src/index.js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new LodashModuleReplacementPlugin({
            shorthands: true,
            paths: true
        })
    ],

    // To be removed when using yarn workspaces
    resolve: {
        alias: {
            "@ovh-ui": path.resolve(__dirname, "../packages"),
            flatpickr: path.resolve(__dirname, "../node_modules/flatpickr")
        },
        mainFiles: ["index", "src/index"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                use: [{
                    loader: "eslint-loader",
                    options: {
                        formatter
                    }
                }],
                exclude
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude
            }, {
                test: /\.(html|svg)$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        interpolate: true,
                        minimize: true
                    }
                }],
                exclude
            }, {
                test: /\.(woff2?|ttf|eot|otf|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    }
};
