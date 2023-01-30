"use strict";

const db = require("../../config/db");
const User = require("./user");

class UserStorage {
  static async login(user) {
    try {
      const sql = "SELECT id,password FROM user WHERE id = ?";

      const check = await db.query(sql, user.id);
      if (check[0][0]) {
        if (check[0][0].password === user.passWord) {
          return { success: true };
        } else return { success: false };
      } else return { success: false };
    } catch (err) {
      console.log(err);
    }
  }

  static async idCheck(user) {
    try {
      const sql = "SELECT id FROM user WHERE id = ?";
      const check = await db.query(sql, [user.id]);
      if (check[0][0]) return { success: true };
      else return { success: false };
    } catch (err) {
      console.log(err);
    }
  }

  static async nicknameCheck(user) {
    try {
      const sql = "SELECT nickName FROM user WHERE nickName = ?";
      const check = await db.query(sql, [user.nickName]);
      if (check[0][0]) return { success: true };
      else return { success: false };
    } catch (err) {
      console.log(err);
    }
  }

  static async register(values) {
    try {
      const sql =
        "INSERT INTO user (id,password,name,phone,email,nickname) VALUES (?,?,?,?,?,?)";

      const insetResult = await db.query(sql, values);
      return insetResult[0];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserStorage;
