import { admin } from "../configs/firebase.config";
import {Request, Response, NextFunction } from "express";

const authenticateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const idToken = authHeader.split(" ")[1];
      admin
        .auth()
        .verifyIdToken(idToken)
        .then(function (decodedToken) {
          return next();
        })
        .catch(function (error) {
          return res.sendStatus(403);
        });
    } else {
      res.sendStatus(401);
    }
  };

export {
    authenticateJWT
};
