import Product from "../model/product.js";

class ProductRepo {
  add = (req) => {
    return Product.create({
      name: req.name,
      price: req.price,
      desc: req.desc,
      sizes: req.sizes,
    });
  };
  get = () => {
    return Product.find();
  };
  getByID = (id) => {
    return Product.findById(id);
  };
  update = (req, id) => {
    return Product.updateOne(
      { _id: id },
      {
        name: req.name,
        price: req.price,
        desc: req.desc,
        sizes: req.sizes,
      }
    );
  };

  delete = (id) => {
    return Product.deleteOne({ _id: id });
  };
}

export default ProductRepo;
