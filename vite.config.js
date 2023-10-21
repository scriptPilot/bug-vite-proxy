export default {
  root: './src',
  server: {
    proxy: {
      '/api.php': 'http://php:80'
    }
  }
}