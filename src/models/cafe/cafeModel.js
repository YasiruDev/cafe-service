module.exports = (sequelize, Sequelize, DataTypes) => {
  const Cafes = sequelize.define(
    "cafes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      logo: {
        type: DataTypes.STRING,
      },
      location: {
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

  return Cafes;
};
