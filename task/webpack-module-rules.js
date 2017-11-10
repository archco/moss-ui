const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  js: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    },
  },

  sourceMap: {
    test: /\.js$/,
    use: ['source-map-loader'],
    enforce: 'pre',
  },

  vue: {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        js: 'babel-loader',
      },
      sourceMap: true,
    },
  },

  scss(isMin = false) {
    let postCssPlugins = [require('autoprefixer')()];
    if (isMin) postCssPlugins.push(require('cssnano')());

    return {
      test: /\.s[ac]ss$/,
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: { sourceMap: !isMin },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: !isMin,
              plugins: postCssPlugins,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: !isMin },
          },
        ],
      }),
    };
  },
};
