const { admin } = require("../configs/firebase.config");

const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const idToken = authHeader.split(" ")[1];
      admin
        .auth()
        .verifyIdToken(idToken)
        .then(function (decodedToken) {
        console.log('Validateeeedd');
          return next();
        })
        .catch(function (error) {
          console.log(error);
          return res.sendStatus(403);
        });
    } else {
      res.sendStatus(401);
    }
  };

module.exports = {
    authenticateJWT
};