// Assume this is a Node.js server-side code

const http = require('http');
const url = require('url');

function fetchInternalResource(userProvidedURL) {
  // Parse the user-provided URL
  const parsedURL = url.parse(userProvidedURL);

  // Check if the URL is valid and points to an internal resource
  if (parsedURL.hostname === 'internal-server' && parsedURL.path === '/sensitive-data') {
    // Perform the request to the internal resource
    http.get(userProvidedURL, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log('Internal resource content:', data);
      });
    }).on('error', (err) => {
      console.error('Error accessing internal resource:', err.message);
    });
  } else {
    console.error('Invalid or external URL provided');
  }
}

// Assume this function is called with a user-provided URL
function processUserInput(userInput) {
  // Perform some processing on the user input
  const sanitizedInput = userInput.trim();

  // Call the function that fetches the internal resource
  fetchInternalResource(sanitizedInput);
}

// Example usage
const userInput = 'http://internal-server/sensitive-data';
processUserInput(userInput);
