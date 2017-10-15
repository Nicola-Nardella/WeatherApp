var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var path = require('path')
var {PORT} = require('./app.config')

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  public: `localhost:${PORT}`,
  stats: {
    colors: true,
  }
})
server.listen(PORT, 'localhost', function() {})
// 192.168.0.13
