const mongoose = require("mongoose");

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
    },
  },
  {
    timestamps: true,
  }
);
//useful save function
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

const userData = mongoose.model("FreedomHerUser", userSchema);
module.exports = userData;
