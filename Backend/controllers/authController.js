const mongoose = require("mongoose");
const userData = require("../models/users");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

// const register = async (req, res) => {
//   try {
//     const { profileImage, username, password } = req.body;

//     const alrExists = await userData.findOne({ username });
//     console.log(alrExists);
//     console.log("hello");
//     if (alrExists) {
//       throw new Error("make a unique username");
//     }
//     const theUser = await userData.create({ profileImage, username, password });
//     const tokenUser = createTokenUser(theUser);

//     attachCookiesToResponse({ res, user: tokenUser });
//     res.status(200).json({ user: tokenUser });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
const register = async (req, res) => {
  try {
    const { profileImage, username, password } = req.body;

    // Check if username already exists
    const alrExists = await userData.findOne({ username });
    if (alrExists) {
      throw new Error("Username already taken, please make a unique username.");
    }

    // Create new user
    const theUser = await userData.create({ profileImage, username, password });
    const tokenUser = createTokenUser(theUser);

    // Attach cookies or token to response
    attachCookiesToResponse({ res, user: tokenUser });

    // Prepare user data for response, excluding the password
    const userForResponse = {
      //_id: theUser._id, // No Idea
      username: theUser.username,
      profileImage: theUser.profileImage,
      // Include any other fields you want to return
    };

    // Send response with both user data and token user
    res.status(200).json(userForResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const login = async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     throw new CustomError.BadRequestError("Please provide email and password");
//   }

//   if (!username) {
//     throw new CustomError.UnauthenticatedError("Invalid Credentials");
//   }
//   const user = await userData.findOne({ username });
//   const isPasswordCorrect = await user.comparePassword(password);
//   if (!isPasswordCorrect) {
//     throw new CustomError.UnauthenticatedError("Invalid Credentials");
//   }
//   const tokenUser = createTokenUser(user);
//   attachCookiesToResponse({ res, user: tokenUser });

//   res.status(StatusCodes.OK).json({ user: tokenUser });
// };

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check for missing username or password
    if (!username || !password) {
      throw new CustomError.BadRequestError(
        "Please provide username and password"
      );
    }

    // Find user by username
    const user = await userData.findOne({ username });
    if (!user) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }

    // Compare provided password with stored hash
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }

    // Create token user data
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });

    // Prepare user data for response, excluding sensitive information
    const userForResponse = {
      //_id: user._id, //Commenting it out for now
      username: user.username,
      profileImage: user.profileImage,
      // Include any other fields you want to return
    };

    // Respond with user and tokenUser data
    res.status(StatusCodes.OK).json(userForResponse);
  } catch (error) {
    // Make sure to handle errors appropriately
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
const islogin = async (req, res) => {
  try {
    console.log(req.cookies);
    console.log(req.signedCookies);
    // Check if signed cookies exist and contain a specific cookie (e.g., 'userId')
    if (!req.signedCookies || !req.signedCookies.token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Not logged in" });
    }
    console.log(req.signedCookies);

    // Extract user ID from signed cookie
    const { userId } = req.signedCookies.token;

    // Find user by ID
    const user = await userData.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
    }

    // Prepare user data for response, excluding sensitive information
    const userForResponse = {
      //_id: user._id, // Optionally include if needed
      username: user.username,
      profileImage: user.profileImage,
      // Include any other fields you want to return
    };

    // Respond with user data
    res.status(StatusCodes.OK).json(userForResponse);
  } catch (error) {
    // Make sure to handle errors appropriately
    res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
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
  islogin,
};
