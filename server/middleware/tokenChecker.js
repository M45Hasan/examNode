const jwt = require("jsonwebtoken");

function tokenCk(req, res, next) {
  jwt.verify(req.headers.authorization, "kire", function (err, decoded) {
    if (err) {
      return res.send("Authorization failed");
    }
    if(decoded.pass==="mern2021"){
        next()
    }
  });
}

module.exports = tokenCk;
