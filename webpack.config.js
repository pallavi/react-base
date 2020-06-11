const HTMLWebpackPlugin = require('html-webpack-plugin');
const Path              = require('path');
const Webpack           = require('webpack');

const PLUGINS = [
  new Webpack.ProvidePlugin({
    React: 'react'
  }),
  new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })
];

module.exports = {
  entry: ['./src/index.jsx'],
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: Path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: PLUGINS
};
