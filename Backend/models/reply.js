const mongoose = require('mongoose');

const replySchema = mongoose.Schema(
  {
    reply: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "FreedomHerUser",
    },
    // userId: {
    //   type: String,
    //   required: true
    // }
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model('FreedomHerReply', replySchema);
module.exports = comment;