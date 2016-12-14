const webpack = require('webpack')

module.exports = {
  devtool: 'hidden-source-map',
  entry: './app',
  output: {
    path: `${__dirname}/build`,
    filename: 'webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],
  resolve: {
    mainFields: [
      'browser',
      'module',
      'jsnext:main',
      'main'
    ]
  }
}
