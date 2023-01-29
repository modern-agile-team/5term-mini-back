"use strict";

const TodoStorage = require("./todoStorage");
const todoCommentStorage = require("./conmmet/todoCommentStorage");
const DataCheck = require("../dataCheck");

class Todo {
  constructor(body) {
    this.body = body;
  }

  async getTodoList(params) {
    const result = await TodoStorage.getTodoList(params);

    return result;
  }

  async getTodoCnt(params) {
    const result = await TodoStorage.getTodoCount(params);

    return result;
  }

  async addTodoList(body) {
    const userNo = await DataCheck.getUserNo(body.id);
    const result = await TodoStorage.addTodoList(body, userNo);

    return result;
  }

  async editTodo(body) {
    const result = await TodoStorage.editTodo(body);

    return result;
  }

  async editChecked(body) {
    const result = await TodoStorage.editChecked(body);

    return result;
  }

  async deleteTodo(body) {
    const date = await TodoStorage.getDate(body.id);
    const todoDelResult = await TodoStorage.deleteTodo(body);
    const cnt = await TodoStorage.getTodoCnt(date);
    if (cnt === 0) {
      const cmtDelResult = todoCommentStorage.deleteComment(date);
      if (todoDelResult && cmtDelResult) {
        return { success: true };
      }
    }
    if (todoDelResult) {
      return { success: true };
    }

    return { success: false };
  }
}

module.exports = Todo;
