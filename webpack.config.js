const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output : {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[fullhash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)$/,
                use: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.gif$/,
                use: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
                
            },
        ]
    },
    devtool: 'source-map'
};