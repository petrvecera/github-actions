const http = require('http');
const assert = require('assert');

http.get({
  hostname: 'localhost',
  port: 3000,
  path: '/',
  agent: false  // Create a new agent just for this one request
}, (res) => {

  res.on('data', function(chunk) {
    const re = /API KEY: (.+)<\/p><p/;
    const api_key = re.exec(chunk)[1];
    console.log(`Supplied API KEY: '${process.argv[2]}', Found API-KEY: '${api_key}'\n`);
    assert(api_key == process.argv[2]);
  });

});
