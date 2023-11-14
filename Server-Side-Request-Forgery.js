// Node.js example using the 'request-promise' library
const rp = require('request-promise');

function fetchData(url) {
  // This function makes an HTTP GET request to the specified URL
  return rp(url);
}

function processUserInput(input) {
  // This function takes user input and fetches data based on it
  const url = `https://api.example.com/data?input=${input}`;
  return fetchData(url);
}

// Example usage of the functions
const userInput = 'https://internal-resource.example.com/private-data';
const result = processUserInput(userInput);

result
  .then(data => console.log('Data:', data))
  .catch(err => console.error('Error:', err.message));
