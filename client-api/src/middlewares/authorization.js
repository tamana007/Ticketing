const { varifyAccessJWT } = require("../helpers/jwtHelper");

//:::::::::::::::USER AUTHORIZATION:::::::::::::::::::::::::

const userAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log("Authorized", authorization);
  //Verify if jwt is valaid
  const decoded = await varifyAccessJWT(authorization);
  console.log('what comes in decode:',decoded);

  if (decoded.email) {
    console.log();
    req.email = decoded.email;
    req._id=decoded._id;
  }
  return next();
};
//:::::::::::::::::::::::Admin Authorization::::::::::::::::::::
const adminAuthorization = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Token not provided" });
    }

    const decoded = await varifyAccessJWT(authorization);
    console.log("decode", decoded);

    if (decoded) {
      req.user = decoded.payload.email;
      req.isAdmin = decoded.payload.isAdmin;
      req.id=decoded.payload.id;

      if (req.isAdmin) {
        next();
      } else {
        res.json({ status: 403, message: "you are not autohrized" });
      }
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden - Admin access required" });
    }
  } catch (error) {
    console.error("Error in adminAuthorization middleware:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { userAuthorization, adminAuthorization };
