/*
In this example, the processUserInput function takes input from an untrusted source (userInput) and directly uses it to construct the URL. The URL is then passed to the fetchUrl function, which fetches the content of the specified URL.
*/

// const fetchUrl = (url) => {
//   // Insecure SSRF vulnerability
//   fetch(url)
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// };

// const processUserInput = (userInput) => {
//   // Assume userInput comes from an untrusted source
//   const url = userInput;
//   fetchUrl(url);
// };

// // Example usage
// const userInput = 'http://example.com/api/data';
// processUserInput(userInput);

// Assume this is a Node.js server-side code

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const targetURL = queryObject.url;

  // Validate that the provided URL is a valid HTTP or HTTPS URL
  if (targetURL && (targetURL.startsWith('http://') || targetURL.startsWith('https://'))) {
    // Make a request to the provided URL
    http.get(targetURL, (targetRes) => {
      let data = '';

      // Concatenate data as it comes in
      targetRes.on('data', (chunk) => {
        data += chunk;
      });

      // Send the data back to the client
      targetRes.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      });
    }).on('error', (e) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Error: ${e.message}`);
    });
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid URL');
  }
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
