const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Todo',
  },
  priority: {
    type: DataTypes.STRING,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',  // Make sure this matches the actual table name
      key: 'id',
    },
    allowNull: true,  // Make it nullable if not all tasks are assigned
  },
}, {
  timestamps: true,
});

module.exports = Task;
