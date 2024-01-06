import {
  loginSchema,
  registerSchema,
} from "../utils/validator/auth-validator.js";
import BaseError from "../utils/error/error.js";
import { compare, encryptPassword, generateToken } from "../utils/jwt/jwt.js";

class AuthService {
  constructor(repo) {
    this.repo = repo;
  }

  login = async (reqLogin) => {
    const { error } = loginSchema.validate(reqLogin, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    const user = await this.repo.getByEmail(reqLogin.email);
    if (!user) throw new BaseError(500, "user doesn't exists");

    const match = compare(reqLogin.password, user.password);
    if (!match) throw new BaseError(401, "password doesn't matched");

    return generateToken(user._id, user.email, user.role);
  };

  register = async (reqRegister) => {
    const { error } = registerSchema.validate(reqRegister, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    const user = await this.repo.getByEmail(reqRegister.email);
    if (user) throw new BaseError(401, "user already exists");

    const hash = encryptPassword(reqRegister.password);
    reqRegister.password = hash;

    const token = await this.repo.add(reqRegister);

    return generateToken(token._id, reqRegister.email, token.role);
  };
}

export default AuthService;
