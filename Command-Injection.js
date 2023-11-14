// Vulnerable XML processing function
function processXml(xmlString) {
  var xmlDoc = new DOMParser().parseFromString(xmlString, "application/xml");
  var result = "";

  // Process XML nodes
  var nodes = xmlDoc.getElementsByTagName("data");
  for (var i = 0; i < nodes.length; i++) {
    result += nodes[i].textContent;
  }

  return result;
}

// Function that fetches XML from an untrusted source
function fetchDataFromExternalSource(url) {
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("GET", url, false);
  xmlHttpRequest.send();
  return xmlHttpRequest.responseText;
}

// Main function that uses the vulnerable XML processing function
function main() {
  // Get XML data from an untrusted source (e.g., user input or external service)
  var xmlData = fetchDataFromExternalSource("https://evil.com/malicious.xml");

  // Process the XML data
  var result = processXml(xmlData);

  // Display the result
  console.log("Result:", result);
}

// Execute the main function
main();
