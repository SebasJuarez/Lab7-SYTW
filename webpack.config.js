const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
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
};
