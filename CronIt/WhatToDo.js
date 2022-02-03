const cron = require("node-cron");

var task = cron.schedule("*/15 * * * *", () => {
  console.log("Printing this line every minute in the terminal");
});

module.exports = { task: task };
