// export const api_base = 'http://musicapi.leanapp.cn';
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
  }
}
