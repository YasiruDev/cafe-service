const express = require("express");
const router = express.Router();

const validator = require("../../../middlewares/validator");
const CafeController = require("../../../controllers/cafe/cafeController");
const cafe = new CafeController();

router.post("/", validator.cafePostparamValidation(), cafe.addNewCafe.bind(cafe));
router.get("/", cafe.getCafeList.bind(cafe));

module.exports = router;
