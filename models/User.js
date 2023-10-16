const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address."]
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],

    friends : [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);

// friendCount
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
