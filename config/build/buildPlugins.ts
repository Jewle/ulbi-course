import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths,isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].css/[name].[contenthash].css",
            chunkFilename: isDev ? "css/[id].css" : "css/[name].css/[id].[contenthash].css",
        })
    ]
}
