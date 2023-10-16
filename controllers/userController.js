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

    //update user by id
  async updateUser(req, res) {
    let { params } = req;
    try {
      const userData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      return res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

    // remove user
  async removeUser({ params }, res) {
  try {
    const userData = await User.findOneAndDelete(
      { _id: params.userId });

    if (!userData) {
      res.status(404).json({ message: "No user ID found" });
      return;
    }

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
},

  // Add friend
  async addFriend(req, res) {
  let { params } = req;
  try {
    const friendData = await User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { runValidators: true, new: true }
    )

    if (!friendData) {
      res.status(400).json({ message: "No friend ID found" });
      return;
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json({ message: "No user found" });
  }

    // update friend
  try {
    const friendEl = await User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { runValidators: true, new: true }
    )

    res.json(friendEl);
  } catch (err) {
    res.status(400).json({ message: "No user found" });
  }
},

  // delete new friend
  async removeFriend(req, res) {
  let { params } = req;

  const friendData = await User.findOneAndUpdate(
    { _id: params.userId },
    { $pull: { friends: params.friendId } },
    { runValidators: true, new: true }
  )

  if (!friendData) {
    return res.status(400).json({ message: "No friend ID found" });
  }

  res.json({ message: "Friend was deleted" });


}

  }

module.exports = userController;