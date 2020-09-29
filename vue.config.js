const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.plugin('html')
    .tap(args => {
      args[0].title = '小麦圈'
      return args
    })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')    //新拉取代码需要执行 vue add style-resources-loader
      ]
    }
  }
}
