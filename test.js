const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "emulator-5554",
    app: "../build/tidewalletandroid_2.3.0.2-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();