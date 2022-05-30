const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false,
    dialectOptions: {
      decimalNumbers: true,
    },
    timezone: "+05:30",
    poll: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.employee = require("../models/employee/employeeModel")(sequelize, Sequelize, DataTypes);
db.cafe = require("../models/cafe/cafeModel")(sequelize, Sequelize, DataTypes);

db.cafe.hasMany(db.employee, { foreignKey: "cafeId" });
db.employee.belongsTo(db.cafe, { foreignKey: "cafeId" });

db.ROLES = ["cafe", "employee"];

module.exports = db;
