const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false,
    },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      plugins: [new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }), new HtmlWebpackPlugin({
        template: './src/inicio.html',
        filename: 'inicio.html',
        chunks: ['index']
      }), new HtmlWebpackPlugin({
        template: './src/misfavs.html',
        filename: 'misfavs.html',
        chunks: ['index']
      }), new HtmlWebpackPlugin({
        template: './src/favs.html',
        filename: 'favs.html',
        chunks: ['index']
      })],
      module: {
        rules: [
          {
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
})