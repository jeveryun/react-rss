const path = require('path')
const nodeExternal = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  externals: [nodeExternal()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 服务端渲染不能用 style-loader, 因为 node 没有 document 对象，无法插入 style 标签
          // 服务端本来就不能渲染 dom， 只是提供 html/css/js 代码给到浏览器， 交给浏览区去渲染
          // 服务端返回的html源码里面没有style标签
          // 而在浏览器中的html 源码里面，有 style 标签，通过js插入进去的
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}