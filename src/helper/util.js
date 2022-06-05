const moment = require("moment");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
const constant = require("../config/constant");

const util = {
  daysDifference: (from, to) => {
    return moment.duration(from.diff(to)).asDays();
  },
  fileUploader: (file) => {
    return new Promise((resolve) => {
      const fileName = uuid + "-" + file.name;
      file.mv("./" + constant.UPLOAD_DIR + "/" + file.name);
      fs.renameSync(
        "./" + constant.UPLOAD_DIR + "/" + file.name,
        "./" + constant.UPLOAD_DIR + "/" + fileName
      );
      const fileData = {
        name: fileName,
        size: file.size,
      };
      resolve(fileData);
    });
  },
};

module.exports = util;
