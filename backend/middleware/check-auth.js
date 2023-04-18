const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Extract token from the "Authorization: Bearer <token>" header
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedToken.id; // Store the decoded user ID in the request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = checkAuth;
