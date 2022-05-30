const moment = require("moment");
const constant = require("../config/constant");

const util = {
  daysDifference: (from, to) => {
    return moment.duration(from.diff(to)).asDays();
  },
};

module.exports = util;
