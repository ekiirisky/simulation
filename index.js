const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello, kak!");
    } 
    else if (req.url === '/test') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello, bro!");
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Salah URL!");
    }
    });

const PORT = 3000;
const IP = '127.0.0.1';
server.listen(PORT, IP, () => {
    console.log("Server sudah jalan!");
});