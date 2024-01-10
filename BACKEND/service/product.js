import productSchema from "../utils/validator/product-validator.js";
import BaseError from "../utils/error/error.js";
import path from "path";
import fs from "fs";
import Product from "../repository/model/product.js";
import mongoose from "mongoose";

class ProductService {
  constructor(repo) {
    this.repo = repo;
  }
  addProduct = (req, reqFile, protocol) => {
    const { error } = productSchema.validate(req, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    if (reqFile === null) throw new BaseError(404, "No FIle Uploaded");

    const file = reqFile.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${protocol}://localhost:3000/images/${fileName}`;
    const allowType = [".png", ".jpeg", ".jpg"];

    if (!allowType.includes(ext.toLocaleLowerCase()))
      throw new BaseError(500, "Invalid Images");

    if (fileSize > 5000000)
      throw new BaseError(500, "image must be lass than 5mb");

    file.mv(`./public/images/${fileName}`);

    return this.repo.add(req, fileName, url);
  };

  getProduct = () => {
    return this.repo.get();
  };

  updateProduct = async (req, id, reqFile, protocol) => {
    const product = await this.repo.findOne(id);
    if (!product) throw new BaseError(401, "id not found");
    const { error } = productSchema.validate(req, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    let fileName = "";

    if (reqFile === null) {
      fileName = product.image;
    } else {
      const file = reqFile.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowType = [".png", ".jpeg", ".jpg"];

      if (!allowType.includes(ext.toLowerCase()))
        throw new BaseError(500, "Invalid Images");

      if (fileSize > 5000000)
        throw new BaseError(500, "image must be lass than 5mb");

      const filepath = `./public/images/${product.image}`;
      fs.unlinkSync(filepath);

      file.mv(`./public/images/${fileName}`);
    }

    const url = `${protocol}://localhost:3000/images/${fileName}`;
    return this.repo.update(req, id, url, fileName);
  };

  deleteProduct = (id) => {
    return this.repo.delete(id);
  };

  detailProduct = (id) => {
    return this.repo.getByID(id);
  };
}

export default ProductService;
