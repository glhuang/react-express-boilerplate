var path = require('path');
var fs = require('fs');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src', 'client', 'entry.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: JSON.parse(fs.readFileSync('.babelrc'))
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
    },
    extensions: ['', '.js','.json', '.jsx']
  }
};
