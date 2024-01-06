import Joi from "joi";

const schemaCart = Joi.object({
  quantity: Joi.number().min(0).default(1),
});

export default schemaCart;
