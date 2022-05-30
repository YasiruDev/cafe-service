const bunyan = require("bunyan");
const moment = require("moment");

const bunyanInfoLogger = bunyan.createLogger({
  src: true,
  name: "GIC Cafe",
  timestamp: moment(),
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
  ],
});
const bunyanErrorLogger = bunyan.createLogger({
  src: true,
  name: "GIC Cafe",
  timestamp: moment(),
  streams: [
    {
      level: "error",
      stream: process.stdout,
    },
  ],
});
const bunyanWarnLogger = bunyan.createLogger({
  src: true,
  name: "GIC Cafe",
  timestamp: moment(),
  streams: [
    {
      level: "warn",
      stream: process.stdout,
    },
  ],
});
const bunyanFatalLogger = bunyan.createLogger({
  src: true,
  name: "GIC Cafe",
  timestamp: moment(),
  streams: [
    {
      level: "fatal",
      stream: process.stdout,
    },
  ],
});
module.exports = {
  info(payload) {
    bunyanInfoLogger.info({ payload });
  },
  error(payload) {
    bunyanErrorLogger.error({ payload });
  },
  warn(payload) {
    bunyanWarnLogger.warn({ payload });
  },
  fatal(payload) {
    bunyanFatalLogger.fatal({ payload });
  },
};
