const express = require("express");
const router = express.Router();
const employee = require("./employee");
const cafe = require("./cafes");

router.use("/employees", employee);
router.use("/cafes", cafe);

module.exports = router;
