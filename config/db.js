const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskMan', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
