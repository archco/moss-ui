const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    },
  },

  sourceMap: {
    test: /\.js$/,
    use: 'source-map-loader',
    enforce: 'pre',
  },

  vue: {
    test: /\.vue$/,
    use: {
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader',
        },
        sourceMap: true,
      },
    },
  },

  scss: {
    test: /\.s[ac]ss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
            plugins: [
              require('autoprefixer')(),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    }),
  },

  svg: {
    test: /\.svg$/,
    loader: 'svg-inline-loader?classPrefix',
  },
};
