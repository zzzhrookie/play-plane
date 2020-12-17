const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/main.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  devtool: 'source-map',
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: ''
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}