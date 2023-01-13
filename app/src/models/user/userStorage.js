"use strict";

const db = require("../../config/db");
const User = require("./user");

class UserStorage {
  static login() {}
  static register(body) {
    new Promise((resolve, reject) => {
      let sql =
        "INSERT INTO user (id,password,phone,email,nickname) VALUES (?,?,?,?,?)";

      const values = [
        body.id,
        body.password,
        body.phone,
        body.email,
        body.nickname,
      ];

      return db.query(sql, values, function (err, result, fields) {
        if (err) {
          console.log(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = UserStorage;