const http = require('http');
const config = require('./config');
const { total } = require('./math');

http.createServer((req, res) => {
  res.end(`${config.greeting}! Cart total: ${total([{ price: 5, qty: 2 }])}\n`);
}).listen(config.port, () => console.log(`Listening on ${config.port}`));
