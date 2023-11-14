const fetchUrl = (url) => {
  // Insecure SSRF vulnerability
  fetch(url)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
};

const processUserInput = (userInput) => {
  // Assume userInput comes from an untrusted source
  const url = userInput;
  fetchUrl(url);
};

// Example usage
const userInput = 'http://example.com/api/data';
processUserInput(userInput);
