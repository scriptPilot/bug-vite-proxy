export default {
  root: './src',
  server: {
    proxy: {
      '/api.php': 'http://localhost:8000'
    }
  }
}