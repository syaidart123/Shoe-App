import schemaCart from "../utils/validator/cart-validator.js";
import BaseError from "../utils/error/error.js";

class CartService {
  constructor(repo) {
    this.repo = repo;
  }

  addToCart = (reqCart, reqUser, id) => {
    const { error } = schemaCart.validate(reqCart, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    reqCart.userID = reqUser.id;
    return this.repo.add(reqCart, id);
  };

  getCart = () => {
    return this.repo.get();
  };

  deleteCart = (id) => {
    return this.repo.delete(id);
  };
}

export default CartService;
