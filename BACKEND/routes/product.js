import { authMiddleware } from "../middleware/authMiddleware.js";

export default (router, controller) => {
  router.get("/product", controller.getProduct);
  router.get("/product/:id", authMiddleware, controller.detailProduct);
  router.post("/product/create", authMiddleware, controller.addProduct);
  router.patch("/product/update/:id", authMiddleware, controller.updateProduct);
  router.delete(
    "/product/delete/:id",
    authMiddleware,
    controller.deleteProduct
  );
  return router;
};
