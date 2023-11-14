// Function to fetch user data based on the username
function getUserData(username) {
    var query = "//users/user[username='" + username + "']";
    // Execute the XPath query and retrieve user data
    var result = executeXPathQuery(query);
    return result;
}

// Function to execute the XPath query
function executeXPathQuery(query) {
    // Assume this function is responsible for executing the XPath query
    // and returning the result from the XML document
    var xmlDoc = getXmlDocument(); // Function to get the XML document
    var result = xmlDoc.evaluate(query, xmlDoc, null, XPathResult.ANY_TYPE, null);
    return result.stringValue;
}

// Function to get the XML document
function getXmlDocument() {
    // Assume this function retrieves and returns the XML document
    var xmlString = "<root><users><user><username>admin</username><password>admin123</password></user></users></root>";
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    return xmlDoc;
}
