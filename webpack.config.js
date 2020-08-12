const path = require('path');
const isProduction = !!(process.env.NODE_ENV === 'production')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugin
module.exports = {
    entry: { index: './src/App.ts', baseGame: './src/BaseGameClass.ts', bonusGame: './src/BonusGameClass.ts' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: isProduction ? false : 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', inject: false, template: 'index.html' })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}