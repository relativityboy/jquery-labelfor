const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    libraryTarget:'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, "js/helpers"),
      "node_modules"
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  stats: {
    colors: true
  },
  target: 'web',
  devtool: 'source-map'
};