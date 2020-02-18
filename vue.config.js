module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://dev.yituoke.ac.cn',
        changeOrigin: true, // 是否跨域
        ws: true,
        pathRewrite: {
          // 重写路径
        }
      }
    }
  }
}
