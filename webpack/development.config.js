const { merge } = require('webpack-merge')
const common = require('./common.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
  }
})