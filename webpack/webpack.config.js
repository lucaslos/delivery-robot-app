/* eslint-disable @typescript-eslint/camelcase */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const SizePlugin = require('size-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO: add size-plugin
// TODO: improve settings for better bundle size

module.exports = merge(commonConfig, /** @type { import('webpack').Configuration } */ {
  mode: 'production',

  output: {
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          toplevel: true,
          parse: {
            ecma: 8,
          },
          compress: {
            passes: 3,
            ecma: 6,
          },
          output: {
            ecma: 6,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            // eslint-disable-next-line @typescript-eslint/camelcase
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
      }),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new SizePlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      __PROD__: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
});
