var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

http.createServer(function (req, res) {
  proxy.web(req, res, { target: process.argv.slice(2)[0], changeOrigin: true});
}).listen(process.argv.slice(2)[1]);

