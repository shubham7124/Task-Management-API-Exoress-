const Task = require('../models/taskModel');
const User = require('../models/userModel');

const createTask = async (req, res) => {
  const { title, description, status, priority, due_date, user_id } = req.body;
  try {
    const task = await Task.create({ title, description, status, priority, due_date, user_id });
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  const { status, priority, due_date, search } = req.query;
  try {
    const whereClause = {};
    if (status) whereClause.status = status;
    if (priority) whereClause.priority = priority;
    if (due_date) whereClause.due_date = due_date;
    if (search) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }
    const tasks = await Task.findAll({ where: whereClause });
    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status, priority } = req.body;
  try {
    const task = await Task.findByPk(taskId);
    if (task) {
      await task.update({ title, description, status, priority });
      res.json({ task });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findByPk(taskId);
    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
