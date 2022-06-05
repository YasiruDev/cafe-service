const { v4: uuidv4 } = require("uuid");
const uuid = `UI${uuidv4()}`;
module.exports = (sequelize, Sequelize, DataTypes) => {
  const Employees = sequelize.define(
    "employees",
    {
      id: {
        type: Sequelize.UUID,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      cafeId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      underscrored: true,
      unique: true,
      createdAt: "addedDate",
      updatedAt: "updatedDate",
    }
  );

  return Employees;
};
