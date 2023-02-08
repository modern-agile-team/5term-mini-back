"use strict";

let FriendsStorage = require("./friendsStorage");
const DataCheck = require("../user/dataCheck");

class Friends {
  constructor(body) {
    this.body = body;
  }

  async getList(user) {
    try {
      let receiverList = await FriendsStorage.getReceiverList(user);
      let senderList = await FriendsStorage.getSenderList(user);
      let friendsList = [];
      friendsList.push(...receiverList);
      friendsList.push(...senderList);

      return friendsList;
    } catch (error) {
      console.log(error);
    }
  }

  async getWaitingList(user) {
    const waitingList = await FriendsStorage.getWaitingList(user);
    let friendsList = [];
    friendsList.push(...waitingList);

    return friendsList;
  }

  async send(body) {
    const response = await FriendsStorage.send(body);
    return response;
  }

  async aceppt(body) {
    const response = await FriendsStorage.aceppt(body);
    return response;
  }

  async reject(body) {
    const response = await FriendsStorage.reject(body);
    return response;
  }

  async search(nickname) {
    try {
      const userNo = await DataCheck.getUserNoByNickname(nickname);
      if (!userNo) {
        return { success: false };
      }
      const response = await FriendsStorage.search(userNo);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Friends;
