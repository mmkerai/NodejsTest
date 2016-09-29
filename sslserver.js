const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('BoldChat_TechMBS_in.pfx')
};

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('This is a test node.js server using SSL certificate\n');
}).listen(443);

