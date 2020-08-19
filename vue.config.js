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
        '/Users/admin/workspace/project/h5-program/vue/agent-shopping-system/src/assets/styles/_variables.scss',
        '/Users/admin/workspace/project/h5-program/vue/agent-shopping-system/src/assets/styles/_mixins.scss'
      ]
    }
  }
}
