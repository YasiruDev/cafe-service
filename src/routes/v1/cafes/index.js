const express = require("express");
const router = express.Router();

const validator = require("../../../middlewares/validator");
const CafeController = require("../../../controllers/cafe/cafeController");
const cafe = new CafeController();

router.get("/", cafe.getCafeList.bind(cafe));
router.post("/", validator.cafePostparamValidation(), cafe.addNewCafe.bind(cafe));
router.put("/", validator.idParamValidation(), cafe.editCafe.bind(cafe));
router.delete("/", validator.idParamValidation(), cafe.deleteCafe.bind(cafe));

router.post("/imageUpload", cafe.uploadImages.bind(cafe));
module.exports = router;
