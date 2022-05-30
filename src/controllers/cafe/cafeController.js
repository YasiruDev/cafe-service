const CafeService = require("../../services/cafe/cafeService");
const response = require("../../config/response");
const constant = require("../../config/constant");
const logger = require("../../helper/logger");

class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  async addNewCafe(req, res) {
    try {
      const { name, description, logo, location } = req.body;
      const data = {
        name,
        description,
        logo,
        location,
      };
      await this.cafeService.addNewCafe(data);
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            data,
          },
        },
        constant.MSG.CAFE_CREATE
      );
      res.send(response.res(true, constant.MSG.CAFE_CREATE, data));
    } catch (error) {
      logger.error(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            error: error.message,
          },
        },
        constant.MSG.APP_ERROR
      );

      res.status(constant.RESPONSE.INTERNAL_ERROR.CODE).send(response.res(false, error.message));
    }
  }
  async getCafeList(req, res) {
    try {
      const cafeList = await this.cafeService.getCafeList();
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            data: cafeList,
          },
        },
        constant.MSG.CAFE_LIST
      );
      res.send(response.res(true, constant.MSG.CAFE_LIST, cafeList));
    } catch (error) {
      logger.error(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            error: error.message,
          },
        },
        constant.MSG.APP_ERROR
      );

      res.status(constant.RESPONSE.INTERNAL_ERROR.CODE).send(response.res(false, error.message));
    }
  }
}
module.exports = CafeController;
