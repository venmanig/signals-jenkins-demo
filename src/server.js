const http = require('http');
const config = require('./config');
const { total, discount } = require('./math');

http.createServer((req, res) => {
  res.end(`${config.greeting}! Cart total: ${discount(total([{ price: 5, qty: 2 }]), config.discountPercent)}\n`);
}).listen(config.port, () => console.log(`Listening on ${config.port}`));
