const {varifyAccessJWT}=require('../helpers/jwtHelper')

const userAuthorization = async (req, res, next) => {
  
  const { authorization } = req.headers;
  console.log('Authorized',authorization);
  //Verify if jwt is valaid
  const decoded = await varifyAccessJWT(authorization);
  console.log(decoded);

  if(decoded.email){
    console.log();
    req.email = decoded.email;
  }

  // res.json(authorization);
  return next()
  //Extract User Id
  //Get uer Profile based on User iD




};

module.exports = { userAuthorization };




