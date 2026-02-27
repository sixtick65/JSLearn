// index.js 기본 코드
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node + Docker!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});