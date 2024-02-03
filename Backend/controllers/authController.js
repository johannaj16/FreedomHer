const userData = require("../models/users");

const {StatusCodes} = require("http-status-codes");
const {attachCookiesToResponse, createTokenUser} = require("../utils");

const register = async (req, res) => {
    const { profileImage, name, password } = req.body;

    const isFirstAccount = (await User.countDocuments({})) === 0;
}