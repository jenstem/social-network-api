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

  // get single user by id
  async getSingleUser(req, res) {
    let { params } = req;
    try {
      const userData = await User.findOne({ _id: params.userId })
        .select("-__v")
        .populate('thoughts', 'friends');

      return res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

    // create a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      return res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },



  }

module.exports = userController;