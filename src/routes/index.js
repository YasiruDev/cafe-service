const express = require("express");
const router = express.Router();
const baseRoute = require("./v1/");

router.use("/v1", baseRoute);

module.exports = router;
