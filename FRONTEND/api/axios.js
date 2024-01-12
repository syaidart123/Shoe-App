import Axios from "axios";
import { setupInterceptor } from "./interceptor.js";

let instance = Axios.create({
  baseURL: "http://localhost:3000",
});

instance = setupInterceptor(instance);

export default instance;
