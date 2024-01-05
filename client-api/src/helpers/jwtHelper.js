const jwt = require("jsonwebtoken");

const createAccessJWT = (payload) => {
  const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET);
  return accessJWT;
};

const createRefreshJWT = (payload) => {
  const accessJWT = jwt.sign(
    {
      payload,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "1h" }
  );

  return accessJWT;
};

module.exports = {
  createAccessJWT,
  createRefreshJWT,
};
