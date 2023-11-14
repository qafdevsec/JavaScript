function decodeEscapeSequence(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

// Strip off the HTML preamble of AJAX Response (if any) and replace <br>s with real carriage returns
function stripHTML(xmlResponse) {
    // Crude: Rips out XML content we don't want to display in the browser'
    // Remove everything up through and including <p> plus carriage return after
    var result = xmlResponse;
    var pIndex = xmlResponse.indexOf('<p>');
    if (pIndex > 0) {
        result = xmlResponse.substring(pIndex + 4, xmlResponse.length);
    }
    result = result.replaceAll("<br>", "\n"); // Replace all <br>'s with carriage returns'

    return result;
}
