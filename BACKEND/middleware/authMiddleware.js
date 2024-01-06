import { verify } from "../utils//jwt/jwt.js";
import BaseError from "../utils/error/error.js";

const getHeaderToken = (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "token not valid" });
    return;
  }
  return token;
};

export const authMiddleware = (req, res, next) => {
  const token = getHeaderToken(req, res);
  try {
    const decoded = verify(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

export const adminAuthMiddleware = (req, res, next) => {
  const token = getHeaderToken(req, res);
  try {
    const user = verify(token);
    req.user = user;
    if (user.role !== "ADMIN")
      throw new BaseError(401, "Unauthorized Access for role");
  } catch (err) {
    next(err);
  }
};
