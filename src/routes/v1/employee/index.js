const express = require("express");
const router = express.Router();

const validator = require("../../../middlewares/validator");
const EmployeeController = require("../../../controllers/employee/employeeController");
const employees = new EmployeeController();

router.post("/", validator.employeePostparamValidation(), employees.addNewEmployee.bind(employees));
router.get("/", employees.getEmployeeList.bind(employees));

module.exports = router;
