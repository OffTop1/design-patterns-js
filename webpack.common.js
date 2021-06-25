const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, ".src/templates/index.html")
        }),
        new MiniCssExtractPlugin({filename: "styles.[hash].css"})
    ]
};