const moment = require("moment");
const constant = require("../../config/constant");
const utill = require("../../helper/util");
const _ = require("lodash");
const db = require("../../models");
const { NUMBER } = require("../../config/constant");
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

  //Get all employee list / get employee by cafe id
  async getEmployeeList(cafeId) {
    try {
      const whereClause = cafeId ? { cafeId } : {};
      return await employee.findAll({
        include: [
          {
            model: cafe,
          },
        ],
        where: whereClause,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateEmployee(data) {
    try {
      const updateFields = {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
        ...(data.phone && { phone: data.phone }),
        ...(data.cafeId && { cafeId: data.cafeId }),
      };
      const update = await employee.update(updateFields, { where: { id: data.id } });

      return update;
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployeeByCafeId(cafeId) {
    try {
      const row = await employee.destroy({ where: { cafeId } });
      return row;
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployeeByEmployeeId(id) {
    try {
      const status = await employee.destroy({ where: { id } });
      if (status === NUMBER.ZERO) {
        throw new Error(constant.VALIDATION.INVALID_EMPLOYEE);
      }
      return status;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = EmployeeService;
