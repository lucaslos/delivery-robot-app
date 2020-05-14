const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = merge(
  commonConfig,
  /** @type { import('webpack').Configuration } */ {
    mode: 'development',

    devtool: 'eval-source-map',

    output: {
      pathinfo: true,
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    },

    devServer: {
      publicPath: '/',
      contentBase: path.join(__dirname, 'public'),
      port: 8000,
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
    },

    plugins: [
      new webpack.DefinePlugin({
        __DEV__: true,
        __PROD__: false,
      }),
      new ReactRefreshPlugin({
        disableRefreshCheck: true,
      }),
      // new FriendlyErrorsWebpackPlugin(),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
);
