const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const userData = mongoose.model('FreedomHerUser', userSchema);
module.exports = userData;