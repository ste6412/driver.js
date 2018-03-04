const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './assets/styles/scss/demo.scss',
    './assets/scripts/src/sholo.js',
  ],
  output: {
    path: path.join(__dirname, '/assets'),
    publicPath: '/assets/',
    filename: 'scripts/dist/sholo.js',
    libraryTarget: 'umd',
    library: 'Sholo',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['babel-plugin-add-module-exports'],
        },
      },
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/css/demo.css',
      allChunks: true,
    }),
  ],
  stats: {
    colors: true,
  },
  devtool: 'cheap-module-eval-source-map',
};
