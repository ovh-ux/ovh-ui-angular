import baseConfig from "./webpack.base.babel";
import merge from "webpack-merge";
import path from "path";
import webpack from "webpack";

export default merge(baseConfig, {
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
