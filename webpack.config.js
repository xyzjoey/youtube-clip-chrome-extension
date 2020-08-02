const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/apps/clipControlApp/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HTMLplugin({
      template: './src/index.html'
    })
  ]
};