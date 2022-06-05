const CafeService = require("../../services/cafe/cafeService");
const response = require("../../config/response");
const constant = require("../../config/constant");
const logger = require("../../helper/logger");
const util = require("../../helper/util");

class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  // Create new cafe
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
  //Get all cafe List / Filter cafe's by location
  async getCafeList(req, res) {
    try {
      const { location } = req.query;
      const cafeList = await this.cafeService.getCafeList(location);
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

  // Edit cafe details
  async editCafe(req, res) {
    try {
      const { name, description, id, logo, location } = req.body;
      const data = {
        name,
        id,
        logo,
        description,
        location,
      };
      await this.cafeService.updateCafe(data);
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            data,
          },
        },
        constant.MSG.CAFE_UPDATE
      );
      res.send(response.res(true, constant.MSG.CAFE_UPDATE, data));
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
  //Delete cafe
  async deleteCafe(req, res) {
    try {
      const { id } = req.body;
      await this.cafeService.deleteCafe(id);
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            data: id,
          },
        },
        constant.MSG.CAFE_DELETE
      );
      res.send(response.res(true, constant.MSG.CAFE_DELETE, { data: id }));
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

  async uploadImages(req, res) {
    try {
      const { files } = req;
      if (!files) {
        res
          .status(constant.RESPONSE.INTERNAL_ERROR.CODE)
          .send(response.res(false, "No Files Uploaded"));
      } else {
        logger.info(
          {
            payload: {
              type: constant.STRING_TYPES.CAFE,
              uuid: req.uuid,
              data: files,
            },
          },
          constant.MSG.IMG_UPLOAD
        );
        const imageData = await util.fileUploader(req.files.image);
        res.send(response.res(true, constant.MSG.IMG_UPLOAD, { data: imageData }));
      }
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
