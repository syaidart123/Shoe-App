class CartController {
  constructor(svc) {
    this.svc = svc;
  }

  addToCart = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.svc.addToCart(req.body, req.user, id);
      res.status(201).json({
        status: "success",
      });
    } catch (err) {
      next(err);
    }
  };

  getCart = async (req, res, next) => {
    try {
      const data = await this.svc.getCart();
      res.status(200).json({
        data: data,
      });
    } catch (err) {
      next(err);
    }
  };

  deleteCart = async (req, res, next) => {
    try {
      await this.svc.deleteCart(req.params.id);
      res.status(204).json({ status: "deleted" });
    } catch (err) {
      next(err);
    }
  };
}

export default CartController;
