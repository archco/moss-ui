const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const Rules = require('./task/webpack-module-rules');

const common = {
  entry: ['./src/js/script.js', './src/scss/moss.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};

// dist
const dist = merge(common, {
  output: {
    filename: 'moss.js',
  },
  module: {
    rules: [Rules.js, Rules.sourceMap, Rules.vue, Rules.scss()],
  },
  plugins: [
    new ExtractTextPlugin('moss.css'),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  devtool: 'source-map',
});

// min
const min = merge(common, {
  output: {
    filename: 'moss.min.js',
  },
  module: {
    rules: [Rules.js, Rules.sourceMap, Rules.vue, Rules.scss(true)],
  },
  plugins: [
    new UglifyJSPugin(),
    new ExtractTextPlugin('moss.min.css'),
  ],
});

// mod
const mod = merge(common, {
  entry: './src/js/moss.js',
  output: {
    filename: 'moss.mod.js',
    library: 'Moss',
    libraryTarget: 'umd',
  },
  module: {
    rules: [Rules.js, Rules.sourceMap, Rules.vue],
  },
});

module.exports = [mod, dist, min];
