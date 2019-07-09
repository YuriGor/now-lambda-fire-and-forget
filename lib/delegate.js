const http = require('http');
const https = require('https');
module.exports = async (host, path, message) => {
  var hostname = host.split(':');
  let port = 80;
  if (hostname.length > 1) {
    port = parseInt(hostname[1]);
  }
  hostname = hostname[0];
  var client = hostname == 'localhost' ? http : https;
  message = JSON.stringify(message);
  var options = {
    hostname,
    port,
    method: 'POST',
    path,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(message),
    },
  };
  console.log('make http request', options);
  await new Promise((resolve, reject) => {
    let req = client.request(options);
    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`, e);
      reject(e);
    });
    req.write(message);
    req.end(() => {
      console.log("NOW it's not λ1's problem anymore.");
      resolve();
    });
  });
};
