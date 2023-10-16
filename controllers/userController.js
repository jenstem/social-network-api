const { User } = require("../models");

const userController = {

  // get all users
  async getUsers(req, res) {
    try {
      const userData = await User.find()
        .select("-__v")
        .populate('thoughts');
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },





  }

module.exports = userController;