import express from "express";
import ProductController from "./controller/product.js";
import productRouter from "./routes/product.js";
import connection from "./utils/mongoose/connection.js";
import ProductService from "./service/product.js";
import ProductRepo from "./repository/repo/product.js";
import AuthController from "./controller/auth.js";
import authRoutes from "./routes/auth.js";
import AuthService from "./service/auth.js";
import AuthRepository from "./repository/repo/auth.js";
import handleErrorMiddleware from "./middleware/handleErrorMiddleware.js";
import CartController from "./controller/cart.js";
import cartRoutes from "./routes/cart.js";
import CartService from "./service/cart.js";
import CartRepository from "./repository/repo/cart.js";
import fileUpload from "express-fileupload";

const app = express();
const routes = express.Router();
connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(fileUpload());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type, Authorization, Cache-control"
  );
  next();
});

const repoProduct = new ProductRepo();
const svcProduct = new ProductService(repoProduct);
const conProduct = new ProductController(svcProduct);

const repoAuth = new AuthRepository();
const svcAuth = new AuthService(repoAuth);
const conAuth = new AuthController(svcAuth);

const repoCart = new CartRepository();
const svcCart = new CartService(repoCart);
const conCart = new CartController(svcCart);

app.use("", productRouter(routes, conProduct));
app.use("", authRoutes(routes, conAuth));
app.use("", cartRoutes(routes, conCart));
app.use(handleErrorMiddleware);

app.listen(3000, () => console.log(`app listen at http://localhost:3000`));
