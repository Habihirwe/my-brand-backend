import Jwt from "jsonwebtoken";
import User from "../Model/userModel.js";

const authLogin = async (request, response, next) => {
  var token = request.headers["auth_token"];
  if (!token) {
    return response.status(401).json({
      invalidToken: "Please Login to continue!",
    });
  } else {
    try {
      var decoded = Jwt.verify(token, process.env.JWT_SECRET);

      if (decoded) {
        console.log(decoded.data)
        //let user = await User.findOne()
        request.user = decoded.data;
      } else {
        return response.status(401).json({
          invalidToken: "Please Login to continue!",
        });
      }
    } catch (error) {
      if (error.expiredAt && error.expiredAt < new Date()) {
        return response.status(401).json({
          invalidToken: "Your session has expired, please login again!",
        });
      } else {
        console.log(error);
        return response.status(401).json({
          invalidToken: "Please Login to continue!",
        });
      }
    }

    next();
  }
};

export default authLogin;
