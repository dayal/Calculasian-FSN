// Detect URL and browser language
var lang = navigator.language || navigator.userLanguage;
if (getParameterByName('lang') === 'en') {
  location = "http://calculasian.com/en.html";
} else if (location.hostname === 'cn.calculasian.com') {
  location = "http://cn.calculasian.com/cn.html";
} else if (lang.substr(0, 3) == "zh-") {
  location = "http://cn.calculasian.com/cn.html";
} else if (location.hostname === 'localhost') {
  location = "en.html";
} else {
  location = "http://calculasian.com/en.html";
}

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}