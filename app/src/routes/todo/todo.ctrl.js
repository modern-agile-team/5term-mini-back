"use strict";
const Todo = require("../../models/todo/todo");

const todo = {
  getTodoList: async (req, res) => {
    const todo = new Todo();
    const response = await todo.getTodoList(req.params);

    return res.json(response);
  },

  getFriendTodoList: async (req, res) => {
    const todo = new Todo();
    const response = await todo.getFriendTodoList(req.params);

    return res.json(response);
  },

  getCnt: async (req, res) => {
    const todo = new Todo();
    const response = await todo.getTodoCnt(req.params);

    return res.json(response);
  },

  createTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.createTodoList(req.body);

    return res.json(response);
  },
  editTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.editTodo(req.body);

    return res.json(response);
  },

  editChecked: async (req, res) => {
    const todo = new Todo();
    const response = await todo.editChecked(req.body);

    return res.json(response);
  },
  deleteTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.deleteTodo(req.body);

    return res.json(response);
  },
};

module.exports = {
  todo,
};
