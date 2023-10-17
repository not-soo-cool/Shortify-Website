const { createProxyMiddleware } = require('http-proxy-middleware')

const setUpProxy = (app) => {
    console.log(app);
    app.use(createProxyMiddleware([
        '/auth/google/callback',
        'auth/google',
        'auth/me',
        '/auth/logout',
    ], { target: 'http:localhost:80/api/v1', changeOrigin: true}));
};


module.exports = setUpProxy