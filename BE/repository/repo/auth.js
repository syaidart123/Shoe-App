import User from "../model/user.js";
class AuthRepository {
  getByEmail = (email) => {
    return User.findOne({ email: email });
  };

  add = (req) => {
    return User.create({
      name: req.name,
      email: req.email,
      password: req.password,
    });
  };
}

export default AuthRepository;
