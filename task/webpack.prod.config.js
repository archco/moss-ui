/**
 * For the build (`npm run build`). It's exports all configurations that dev, prod and example.
 */

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devConfig = require('../webpack.config');
const exampleConfig = require('./webpack.example.config');

const prodConfig = merge(devConfig, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  },
  devtool: false,
});

prodConfig.plugins = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].min.css',
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.min\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: { removeAll: false },
    },
  }),
];

module.exports = [devConfig, prodConfig, exampleConfig];
