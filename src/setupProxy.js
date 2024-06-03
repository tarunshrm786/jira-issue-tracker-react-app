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
  app.use('/api', createProxyMiddleware({
    target: 'https://tarunshrm768.atlassian.net', // Update with the correct Jira API base URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api/rest/api/3', // Rewrite '/api' to '/api/rest/api/3' in the proxy request
    },
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.REACT_APP_JIRA_USERNAME + ':' + process.env.REACT_APP_JIRA_PASSWORD).toString('base64')}`,
    },
  }));
};
