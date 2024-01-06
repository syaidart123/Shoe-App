class AuthController {
  constructor(svc) {
    this.svc = svc;
  }
  login = async (req, res, next) => {
    try {
      const token = await this.svc.login(req.body);
      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  };
  register = async (req, res, next) => {
    try {
      const data = await this.svc.register(req.body);
      res.send({
        data,
      });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthController;
