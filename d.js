const http = require('https')
var options = {
    host: 'https://pastebin.com',
    path: '/raw/sWTJEUs1',
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
};

console.log("Start");
var x = http.request(options, function (res) {
    console.log("Connected");
    res.on('data', function (data) {
        console.log(data);
    });
});

x.end();
/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);*/