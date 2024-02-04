const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const isTokenValid = ({ token }) => {
  try {
    console.log(token);
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Token verification error:", error.message);
    throw new Error("Invalid Token");
  }
};

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true, // To prevent XSS attacks
    expires: new Date(Date.now() + oneDay), // Cookie expiration
    secure: false, // Set to true in production
    signed: true, // If using signed cookies
    sameSite: "None", // Adjust depending on cross-site access needs
  });
};

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
