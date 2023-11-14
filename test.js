// Function to retrieve user data from XML using XPath
function getUserData(username) {
    // Construct XPath query with user input
    var xpathQuery = "//user[@username='" + username + "']";

    // Execute XPath query on the XML document
    var result = executeXPathQuery(xpathQuery);

    // Process and display the result
    processResult(result);
}

// Function to execute XPath query on the XML document
function executeXPathQuery(xpathQuery) {
    // Assume xmlDoc is the XML document you are querying
    // This is just a simplified example, in a real scenario, you need to load an XML document securely
    var xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");

    // Use XPath to query the XML document
    var result = xmlDoc.evaluate(xpathQuery, xmlDoc, null, XPathResult.ANY_TYPE, null);

    return result;
}

// Function to process and display the XPath query result
function processResult(result) {
    // Extract data from the XPath result
    var data = result.stringValue;

    // Display the data (for demonstration purposes)
    console.log("User data: " + data);
}

// Example usage
var userInput = "admin' or '1'='1' or '";
getUserData(userInput);
