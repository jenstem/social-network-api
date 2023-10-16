const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },

    reactions: [reactionSchema],


    username: {
        type: String,
        required: true,
        ref: "User"
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

// reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

module.exports = Thought;