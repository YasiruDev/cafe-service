const express = require("express");
const router = express.Router();

const validator = require("../../../middlewares/validator");
const EmployeeController = require("../../../controllers/employee/employeeController");
const employees = new EmployeeController();

router.get("/", employees.getEmployeeList.bind(employees));
router.post("/", validator.employeePostparamValidation(), employees.addNewEmployee.bind(employees));
router.put("/", validator.putParamValidation(), employees.editEmployee.bind(employees));
router.delete("/", validator.putParamValidation(), employees.deleteEmployee.bind(employees));

module.exports = router;
