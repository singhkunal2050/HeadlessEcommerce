// Verify Token
export default function verifyToken(req, res , next) {
  try {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.json("403");
    }
  } catch (err) {
    res.json("No Token");
  }
}
