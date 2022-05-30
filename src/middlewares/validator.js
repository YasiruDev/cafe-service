const { check, body, validationResult, param } = require("express-validator/check");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
const response = require("./../config/response");
const constant = require("./../config/constant");

const checkvalidator = {
  cafePostparamValidation: () => {
    return [
      body(constant.VALIDATION.NAME)
        .exists()
        .withMessage(`${constant.VALIDATION.NAME} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.NAME} ${constant.VALIDATION.STRING}`),
      body(constant.VALIDATION.DESCRIPTION)
        .exists()
        .withMessage(`${constant.VALIDATION.DESCRIPTION} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.DESCRIPTION} ${constant.VALIDATION.STRING}`),
      body(constant.VALIDATION.LOGO)
        .exists()
        .withMessage(`${constant.VALIDATION.LOGO} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.LOGO} ${constant.VALIDATION.STRING}`),
      body(constant.VALIDATION.LOCATION)
        .exists()
        .withMessage(`${constant.VALIDATION.LOCATION} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.LOCATION} ${constant.VALIDATION.STRING}`),
      (req, res, next) => {
        req.uuid = uuid;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res
            .status(constant.RESPONSE.NOT_FOUND.CODE)
            .send(response.res(false, constant.MSG.PARAM_ERROR, errors.array()));
        } else {
          next();
        }
      },
    ];
  },

  employeePostparamValidation: () => {
    return [
      body(constant.VALIDATION.NAME)
        .exists()
        .withMessage(`${constant.VALIDATION.NAME} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.NAME} ${constant.VALIDATION.STRING}`),
      body(constant.VALIDATION.EMAIL)
        .exists()
        .withMessage(`${constant.VALIDATION.EMAIL} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.EMAIL} ${constant.VALIDATION.STRING}`)
        .isEmail()
        .withMessage(`${constant.VALIDATION.EMAIL} ${constant.VALIDATION.INVAL_EMAIL}`),

      body(constant.VALIDATION.PHONE)
        .exists()
        .withMessage(`${constant.VALIDATION.PHONE} ${constant.VALIDATION.REQUIRED} `)
        .isString()
        .withMessage(`${constant.VALIDATION.PHONE} ${constant.VALIDATION.STRING}`),
      body(constant.VALIDATION.CAFE_ID)
        .exists()
        .withMessage(`${constant.VALIDATION.CAFE_ID} ${constant.VALIDATION.REQUIRED} `)
        .isNumeric()
        .withMessage(`${constant.VALIDATION.CAFE_ID} ${constant.VALIDATION.NUMBER}`),
      (req, res, next) => {
        req.uuid = uuid;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res
            .status(constant.RESPONSE.NOT_FOUND.CODE)
            .send(response.res(false, constant.MSG.PARAM_ERROR, errors.array()));
        } else {
          next();
        }
      },
    ];
  },
};

module.exports = checkvalidator;
