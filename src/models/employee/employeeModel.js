module.exports = (sequelize, Sequelize, DataTypes) => {
  const Employees = sequelize.define(
    "employees",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
