const moment = require("moment");
const _ = require("lodash");
const constant = require("../../config/constant");
const utill = require("../../helper/util");
const db = require("../../models");
const EmployeeService = require("../employee/employeeService");
const { NUMBER } = require("../../config/constant");
const cafe = db.cafe;
const employee = db.employee;
const Sequelize = db.sequelize;

class CafeService {
  constructor() {
    this.employeeService = new EmployeeService();
  }
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

  // Retrive all Cafe's / filter cafe's by location;Order by highest employee count
  async getCafeList(location) {
    try {
      const whereClause = location ? { location } : {};
      return await cafe.findAll({
        attributes: {
          include: [[Sequelize.fn("COUNT", Sequelize.col("employees.cafeId")), "employeeCount"]],
        },
        where: whereClause,
        include: [
          {
            model: employee,
            attributes: [],
          },
        ],
        group: ["cafes.id"],
        order: [[Sequelize.col("employeeCount"), "DESC"]],
      });
    } catch (error) {
      throw error;
    }
  }

  async updateCafe(data) {
    try {
      const updateFields = {
        ...(data.name && { name: data.name }),
        ...(data.description && { description: data.description }),
        ...(data.location && { location: data.location }),
        ...(data.logo && { logo: data.logo }),
      };
      const update = await cafe.update(updateFields, { where: { id: data.id } }); //update provided info

      return update;
    } catch (error) {
      throw error;
    }
  }

  async deleteCafe(id) {
    try {
      const status = await cafe.destroy({ where: { id } });
      if (status === NUMBER.ZERO) {
        throw new Error(constant.VALIDATION.INVALID_CAFE);
      }
      await this.employeeService.deleteEmployeeByCafeId(id); // delete employees related to the cafe
      return status;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CafeService;
