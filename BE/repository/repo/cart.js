import Cart from "../model/cart.js";
import mongoose from "mongoose";
class CartRepository {
  add = (req, id) => {
    return Cart.create({
      productID: new mongoose.Types.ObjectId(id),
      userID: new mongoose.Types.ObjectId(req.userID),
      quantity: req.quantity,
    });
  };
  get = () => {
    return Cart.find().populate("productID");
  };

  delete = (id) => {
    return Cart.deleteOne({ _id: id });
  };
}

export default CartRepository;
