"use strict";

let UserStorage = require("./userStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login(body) {
    const response = await UserStorage.login(body);
    return response;
  }

  async idCheck(body) {
    const response = await UserStorage.idCheck(body);
    return response;
  }

  async nicknameCheck(body) {
    const response = await UserStorage.nicknameCheck(body);
    return response;
  }

  register(body) {
    const response = UserStorage.register(body);
    return response;
  }
}

module.exports = User;
