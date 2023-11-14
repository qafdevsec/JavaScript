function getUserData(username) {
    // Assume that the username is used in an XPath query
    var query = "//user[@username='" + username + "']";
    var result = executeXPathQuery(query);
    return result;
}

function executeXPathQuery(query) {
    // Insecure XPath query execution
    var xmlDoc = new DOMParser().parseFromString(xmlData, "text/xml");
    var result = xmlDoc.evaluate(query, xmlDoc, null, XPathResult.ANY_TYPE, null);
    var userData = result.iterateNext();
    return userData;
}

// Assume that xmlData is loaded from an external source
var xmlData = "<data><user username='admin'>Admin User</user><user username='guest'>Guest User</user></data>";

// Get user data based on user input
var userInput = prompt("Enter username:");
var userData = getUserData(userInput);

if (userData) {
    alert("User found: " + userData.textContent);
} else {
    alert("User not found");
}
