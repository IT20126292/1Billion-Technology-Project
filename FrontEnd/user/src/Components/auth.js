const jwt = require("jsonwebtoken");

const admin = require("../../../../BackEnd/Models/Adminaccess_Models/admin");
const auth = async (req, res, next) => {

  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, "jwtSecret");
    const pos = await admin.findOne({ _id: decode._id, "tokens.token": token });
    if (!pos) {
      throw new Error("Please Authenticate");
    }
    req.token = token;
    req.pos = pos;
    next();

  } catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }

};

module.exports = auth;