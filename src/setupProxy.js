// const { createProxyMiddleware } = require('http-proxy-middleware');
// require('dotenv').config();

// module.exports = function(app) {
//   app.use('/api', createProxyMiddleware({
//     target: process.env.REACT_APP_JIRA_API_URL,
//     changeOrigin: true,
//   }));
// };


const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function(app) {
  // Proxy for localhost
  app.use('/api', createProxyMiddleware({
    target: process.env.REACT_APP_JIRA_API_URL,
    changeOrigin: true,
  }));

  // Proxy for Netlify app
  app.use('/netlify-api', createProxyMiddleware({
    // target: 'https://superlative-pony-59485f.netlify.app',
    target: process.env.REACT_APP_JIRA_API_URL,
    changeOrigin: true,
  }));
};
