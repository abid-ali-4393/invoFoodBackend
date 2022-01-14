const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Bad Request",
        error: "token is missing You need to provide token",
      });
    }

    try {
      const token = req.headers.authorization.split(" ")[1];

      const decoded = await jwt.verify(token, process.env.JWT_PVT_KEY);
      console.log(decoded);

      return next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Unauthorized access!",
        error: "Invalid Token",
      });
    }
  } catch (error) {
    // throw error;
    return res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = verifyToken;
