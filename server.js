require("dotenv").config();

const app = require("./src/loaders/app");
app();

// database
const db = require("./src/models");
const Role = db.role;
db.sequelize.sync({ force: false }).then(() => {});

module.exports = app;
