const http = require('node:http');

function main() {
  const server = http.createServer((req, res) => {
    const data = ['a', 'b', 'c', 'd'];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });

  server.listen(3000, 'localhost')
}

main();