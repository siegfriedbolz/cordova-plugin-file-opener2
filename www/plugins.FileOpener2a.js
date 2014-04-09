var exec = require("cordova/exec");

function FileOpener2a() {};

FileOpener2a.prototype.open = function(fileName, contentType, callbackContext) {
	callbackContext = callbackContext || {};
	exec(callbackContext.success || null, callbackContext.error || null, "FileOpener2a", "open", [fileName, contentType]);
};

var fileOpener2a = new FileOpener2a();
module.exports = fileOpener2a;
