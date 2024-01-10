import Product from "../model/product.js";
import mongoose from "mongoose";
class ProductRepo {
  add = (req, fileName, url) => {
    return Product.create({
      name: req.name,
      price: req.price,
      desc: req.desc,
      sizes: req.sizes,
      image: fileName,
      url: url,
    });
  };
  get = () => {
    return Product.find();
  };
  getByID = (id) => {
    return Product.findById(id);
  };
  update = (req, id, url, fileName) => {
    return Product.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      {
        name: req.name,
        price: req.price,
        desc: req.desc,
        sizes: req.sizes,
        image: fileName,
        url: url,
      }
    );
  };

  delete = (id) => {
    return Product.deleteOne({ _id: id });
  };
  findOne = (id) => {
    return Product.findOne({ _id: new mongoose.Types.ObjectId(id) });
  };
}

export default ProductRepo;
