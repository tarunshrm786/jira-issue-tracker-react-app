const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://tarunshrm768.atlassian.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/rest/api/3' // Rewrite '/api' to '/rest/api/3' in the request URL
      },
    })
  );
};
