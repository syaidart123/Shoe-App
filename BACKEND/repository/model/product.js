import mongoose from "mongoose";

const schemaProduct = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  sizes: [
    {
      type: String,
      enum: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    },
  ],
  image: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Product = new mongoose.model("Product", schemaProduct);
export default Product;
