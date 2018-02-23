const path = require('path');
const Rules = require('./webpack-module-rules');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    example: './example/js/example.js',
  },
  output: {
    path: path.resolve(__dirname, '../example/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [Rules.js],
  },
  devtool: 'source-map',
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      sound: false,
    }),
  ]
};
