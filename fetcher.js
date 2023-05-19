const request = require('request');
const fs = require('fs');

const args = process.argv;
const sliced = args.slice(2);
const url = sliced[0];
const file = sliced[1];

request(url, (error, response, body) => {
  response.setEncoding('utf8');
  fs.writeFile(file, body, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}.`);
  });
});
