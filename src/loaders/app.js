const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../routes");
const response = require("../config/response");
const constant = require("../config/constant");

module.exports = () => {
  const app = express();
  app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Accept, Authorization");
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/", routes);

  app.use(function (req, res, next) {
    res
      .status(constant.RESPONSE.NOT_FOUND.CODE)
      .send(response.res(false, constant.MSG.INVALID_URL));
  });

  app.listen(process.env.APP_PORT, () => {
    console.log("App listening on port", process.env.APP_PORT);
  });
};
