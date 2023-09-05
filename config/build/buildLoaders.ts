import webpack from "webpack";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader:'css-loader',
                options:{
                    modules:{
                        auto:(res:String)=>res.includes('.module.')
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    return [
        typescriptLoader,
        sassLoader
    ]
}
