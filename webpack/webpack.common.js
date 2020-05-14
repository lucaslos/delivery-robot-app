const appConfig = require('../app.config.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const fileLoaderOptions = {
  outputPath: 'assets',
  name: '[name]-[contenthash:8].[ext]',
};

module.exports = /** @type { import('webpack').Configuration } */ {
  entry: ['./src/index'],

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          ...fileLoaderOptions,
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|ico|woff|woff2)$/i,
        loader: 'file-loader',
        options: fileLoaderOptions,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: appConfig.html.title,
    }),
  ],
};
