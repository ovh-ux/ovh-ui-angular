import baseConfig from "./webpack.base.babel";
import merge from "webpack-merge";

export default merge(baseConfig, {
    devtool: "inline-source-map"
});
