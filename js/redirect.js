// Detects browser language
var lang = navigator.language || navigator.userLanguage;
if (lang.substr(0, 3) == "zh-") {
	location = "cn.html";
} else {
  location = "en.html"
}