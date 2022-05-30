const moment = require("moment");
const _ = require("lodash");
const constant = require("../../config/constant");
const utill = require("../../helper/util");
const db = require("../../models");
const cafe = db.cafe;
const employee = db.employee;
const Sequelize = db.sequelize;

class CafeService {
  constructor() {}
  async addNewCafe(data) {
    try {
      data.status = 1;
      const [row, created] = await cafe.findOrCreate({ where: data, default: data });
      if (!created) {
        throw new Error(constant.VALIDATION.DUPLICATE_ENTRY);
      }
      return row;
    } catch (error) {
      throw error;
    }
  }

  async getCafeList() {
    try {
      return await cafe.findAll({
        attributes: {
          include: [[Sequelize.fn("COUNT", Sequelize.col("employees.cafeId")), "employeeCount"]],
        },
        include: [
          {
            model: employee,
            attributes: [],
          },
        ],
        group: ["cafes.id"],
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CafeService;
