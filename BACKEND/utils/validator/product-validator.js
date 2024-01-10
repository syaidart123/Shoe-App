import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string(),
  sizes: Joi.array()
    .items(
      Joi.string().valid("35", "36", "37", "38", "39", "40", "41", "42", "43")
    )
    .required(),
  image: Joi.string(),
  url: Joi.string(),
});

export default productSchema;
