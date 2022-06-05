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
      const { name, email, phone, cafeId, gender } = req.body;
      const data = {
        name,
        email,
        phone,
        cafeId,
        gender,
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

  //Get Employee list / get employee by cafe id
  async getEmployeeList(req, res) {
    try {
      const { cafeId } = req.query;
      const employeeList = await this.employeeService.getEmployeeList(cafeId);
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

  async editEmployee(req, res) {
    try {
      const { name, email, id, phone, cafeId } = req.body;
      const data = {
        name,
        email,
        id,
        phone,
        cafeId,
      };
      await this.employeeService.updateEmployee(data);
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

  //Delete employee by employee Id
  async deleteEmployee(req, res) {
    try {
      const { id } = req.body;

      await this.employeeService.deleteEmployeeByEmployeeId(id);

      logger.info(
        {
          payload: {
            type: constant.STRING_TYPES.CAFE,
            uuid: req.uuid,
            data: id,
          },
        },
        constant.MSG.EMPLOYEE_DELETE
      );
      res.send(response.res(true, constant.MSG.EMPLOYEE_DELETE, { data: id }));
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
module.exports = EmployeeController;
