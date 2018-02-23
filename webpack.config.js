const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const Rules = require('./task/webpack-module-rules');
const env = process.env.NODE_ENV || 'dev'; // dev|prod|test

let config = {
  entry: {
    moss: ['./src/scss/moss.scss', './src/js/moss.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'MossUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      Rules.sourceMap,
      Rules.js,
      Rules.vue,
      Rules.scss,
      Rules.svg,
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.vue', '.svg'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      sound: false,
    }),
  ],
};

if (env === 'prod') {
  config = merge(config, {
    entry: { 'moss.min': './src/js/moss.js' },
    plugins: [
      new UglifyJSPlugin({
        sourceMap: false,
        include: /\.min\.js$/,
      }),
      new ExtractTextPlugin('[name].min.css'),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: { removeAll: false },
        },
      }),
    ],
  });
}

if (env === 'test') {
  config.externals = [nodeExternals()];
  config.devtool = 'inline-cheap-module-source-map';
}

module.exports = config;
