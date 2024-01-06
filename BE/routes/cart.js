import { authMiddleware } from "../middleware/authMiddleware.js";
export default (routes, controller) => {
  routes.post("/product/:id/cart", authMiddleware, controller.addToCart);
  routes.get("/cart", authMiddleware, controller.getCart);
  routes.delete("/cart/delete/:id", authMiddleware, controller.deleteCart);
  return routes;
};
