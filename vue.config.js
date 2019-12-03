
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://121.40.162.1:8002', //要访问的那个url. 如我的8080端口到4000端口.
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
