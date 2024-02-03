const userData = require("../models/users");

const {StatusCodes} = require("http-status-codes");
const {attachCookiesToResponse, createTokenUser} = require("../utils");

const register = async (req, res) => {
    const { profileImage, username, password } = req.body;

    const user = await userData.create({username, password});
    const tokenUser = createTokenUser(user);

    attachCookiesToResponse({ res, user: tokenUser});
    res.status(200).json({user: tokenUser});
}

