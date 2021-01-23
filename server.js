const express = require('express');
const fs = require('fs');
const server = express();
const PORT = 4200;

server.get('/api/:file', (req, res) => {
  fs.readFile(`${__dirname}/api/${req.params.file}.json`, 'utf8', (err, data) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.parse(data));
  });
});

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
