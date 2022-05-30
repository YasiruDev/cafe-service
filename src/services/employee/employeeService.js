const moment = require("moment");
const constant = require("../../config/constant");
const utill = require("../../helper/util");
const _ = require("lodash");
const db = require("../../models");
const cafe = db.cafe;
const employee = db.employee;

class EmployeeService {
  async addNewEmployee(data) {
    try {
      data.status = 1;
      const [row, created] = await employee.findOrCreate({ where: data, default: data });
      if (!created) {
        throw new Error(constant.VALIDATION.DUPLICATE_ENTRY);
      }
      return row;
    } catch (error) {
      throw error;
    }
  }

  async getEmployeeList() {
    try {
      return await employee.findAll({
        include: [
          {
            model: cafe,
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = EmployeeService;
