const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    /*
      For Code splitting add:
      otherFile: './otherFile.js'
    */
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 3000,
    lazy: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      }
    ],
  },
};
