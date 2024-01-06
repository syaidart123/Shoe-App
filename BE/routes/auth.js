export default (routes, controller) => {
  routes.post("/login", controller.login);
  routes.post("/register", controller.register);
  return routes;
};
