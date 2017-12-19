import formatter from "eslint-friendly-formatter";
import path from "path";
import webpack from "webpack";

const exclude = [/node_modules/, /dist/];

export default {
    entry: {
        component: ["./packages/oui-angular/src/index.js"]
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            "@oui-angular": path.resolve(__dirname, "../packages")
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        })
    ],
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
                use: [
                    "ng-annotate-loader",
                    "babel-loader"
                ],
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
