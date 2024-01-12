class ProductController {
  constructor(svc) {
    this.svc = svc;
  }

  getProduct = async (req, res, next) => {
    try {
      const data = await this.svc.getProduct();
      res.status(200).json({
        data: data,
      });
    } catch (err) {
      next(err);
    }
  };

  addProduct = async (req, res, next) => {
    try {
      const data = await this.svc.addProduct(req.body, req.files, req.protocol);
      res.status(201).json({
        data: data,
      });
    } catch (err) {
      next(err);
    }
  };

  updateProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = await this.svc.updateProduct(
        req.body,
        id,
        req.files,
        req.protocol
      );
      res.status(200).json({
        data: updated,
      });
    } catch (err) {
      next(err);
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.svc.deleteProduct(id);
      res.status(204).json({
        status: "deleted",
      });
    } catch (err) {
      next(err);
    }
  };

  detailProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.svc.detailProduct(id);
      res.status(200).json({ data });
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;
