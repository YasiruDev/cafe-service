const EmployeeService = require("../../services/employee/employeeService");
const response = require("../../config/response");
const constant = require("../../config/constant");
const logger = require("../../helper/logger");

class EmployeeController {
  constructor() {
    this.employeeService = new EmployeeService();
  }

  async addNewEmployee(req, res) {
    try {
      const { name, email, phone, cafeId } = req.body;
      const data = {
        name,
        email,
        phone,
        cafeId,
      };
      await this.employeeService.addNewEmployee(data);
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.EMPLOYEE,
            uuid: req.uuid,
            data,
          },
        },
        constant.MSG.EMPLOYEE_CREATE
      );
      res.send(response.res(true, constant.MSG.EMPLOYEE_CREATE, data));
    } catch (error) {
      logger.error(
        {
          payload: {
            type: constant.STRING_TYPES.EMPLOYEE,
            uuid: req.uuid,
            error: error.message,
          },
        },
        constant.MSG.APP_ERROR
      );

      res.status(constant.RESPONSE.INTERNAL_ERROR.CODE).send(response.res(false, error.message));
    }
  }

  async getEmployeeList(req, res) {
    try {
      const employeeList = await this.employeeService.getEmployeeList();
      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.EMPLOYEE,
            uuid: req.uuid,
            data: employeeList,
          },
        },
        constant.MSG.EMPLOYEE_LIST
      );
      res.send(response.res(true, constant.MSG.EMPLOYEE_LIST, employeeList));
    } catch (error) {
      logger.error(
        {
          payload: {
            type: constant.STRING_TYPES.EMPLOYEE,
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
module.exports = EmployeeController;
