const mongoose = require("mongoose");
const userData = require("../models/users");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

const register = async (req, res) => {
  try {
    const { profileImage, username, password } = req.body;

    const alrExists = await userData.findOne({ username });
    console.log(alrExists);
    console.log("hello");
    if (alrExists) {
      throw new Error("make a unique username");
    }
    const user = await userData.create({ profileImage, username, password });
    const tokenUser = createTokenUser(user);

    attachCookiesToResponse({ res, user: tokenUser });
    res.status(200).json({ user: tokenUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }

  if (!username) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const user = await userData.findOne({ username });
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  req.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "user logged out!" });
};

module.exports = {
  register,
  login,
  logout,
};
