"use strict";

const Diary = require("../../models/diary/diary");
const Todo = require("../../models/todo/todo");
const User = require("../../models/user/user");
const Profile = require("../../models/profile/profile");

//로그인 회원가입
const sign = {
  login: (req, res) => {
    return res.json({ sucess: true });
  },
  register: (req, res) => {
    const user = new User();
    const response = user.register();
    return res.json(response);
  },
};

const process = {
  //diary CRUD
  createDiary: async(req, res) => {
      const diary = new Diary()
      const response = await diary.createDairy(req.params,req.body);
      return res.json(response);
  },

  deleteDiary: async(req, res) => {
      const diary = new Diary()
      const response = await diary.deleteDiary(req.params);
      return res.json(response);
  },
  updateDiary: async(req, res) => {
      const diary = new Diary()
      const response = await diary.updateDiary(req.params,req.body);
      return res.json(response);
  },
  getDiary: async(req, res) => {
    const diary = new Diary()
    const response = await diary.readDiary(req.params);
    res.send(response)
  },
  getSelectDiary: async(req, res) => {
    const diary = new Diary()
    const response = await diary.readSelectDiary(req.params);
    res.send(response)
  },
  //다이어리 좋아요
  createDiaryLike: async(req, res) => {
    const diary = new Diary()
    const response = await diary.createDairyLike(req.params);
    return res.json(response);
  },
  deleteDiaryLike: async(req, res) => {
    const diary = new Diary()
    const response = await diary.deleteDiaryLike(req.params);
    return res.json(response);
  },
  getDiaryLike: async(req, res) => {
    const diary = new Diary()
    const response = await diary.readDiaryLike(req.params);
    res.send(response)
  },
  //프로필
  getProfile: async(req, res) => {
    const profile = new Profile()
    const response = await profile.readProfile(req.params);
    res.send(response)
  },
  getFriendProfile: async(req, res) => {
    const profile = new Profile()
    const response = await profile.readFriendProfile(req.params);
    res.send(response)
  },
  updateProfile: async(req, res) => {
    const profile = new Profile()
    const response = await profile.updateProfile(req.params,req.body);
    return res.json(response);
  }
}

const info = {
  getInfo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.getTodoList(req.body);

    return res.json(response);
  },

  getCnt: async (req, res) => {
    const todo = new Todo();
    const response = await todo.getTodoCnt(req.body);

    return res.json(response);
  },

  addTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.addTodoList(req.body);

    return res.json(response);
  },
  editTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.editTodo(req.body);

    return res.json(response);
  },
  deleteTodo: async (req, res) => {
    const todo = new Todo();
    const response = await todo.deleteTodo(req.body);

    return res.json(response);
  },
};
module.exports = {
  sign,
  process,
  info,
};
