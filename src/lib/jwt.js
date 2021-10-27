const jwt = require("jsonwebtoken");

function sign(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
}

const validateToken = async (req, res, next) => {
  const accessToken = await req.cookies["access-token"];
  console.log("cookies", req.cookies)
  try {
    console.log("access-token:", accessToken);
    const validToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (validToken) {
      req.authenicated = true;
      return next();
    } 
  } catch (err) {
    return res.status(403).json({Error: "Access Denied"});
  }
};

module.exports = {
  sign,
  validateToken,
};
