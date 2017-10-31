var exec = require("cordova/exec");

function PushNotificationsStatus() {
}

PushNotificationsStatus.prototype.isPushNotificationsEnabled = function(onsucess, onfail) {
  exec(onsucess, onfail, "PushNotificationsStatus", "isPushNotificationsEnabled", []);
};

var PushNotificationsStatus = new PushNotificationsStatus();
module.exports = PushNotificationsStatus;
