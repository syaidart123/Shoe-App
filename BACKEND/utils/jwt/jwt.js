import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.SECRET_KEY;

const compare = (password, hashPassword) => {
  return bcryptjs.compareSync(password, hashPassword);
};
const encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};
const verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, JWT_SECRET, { expiresIn: 36000 });
};

export { compare, encryptPassword, verify, generateToken };
