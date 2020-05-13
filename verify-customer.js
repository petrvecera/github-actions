const http = require('http');
const assert = require('assert');

http.get({
  hostname: 'localhost',
  port: 3000,
  path: '/',
  agent: false  // Create a new agent just for this one request
}, (res) => {

  res.on('data', function(chunk) {
    const re_customer = /CUSTOMER: (.+)<\/p>/;
    const customer = re_customer.exec(chunk)[1];
    console.log(`Supplied customer name: '${process.argv[2]}', Found customer name: '${customer}'\n`);
    assert(customer == process.argv[2]);
  });

});
