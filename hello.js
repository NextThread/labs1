const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello, World!\n');
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
