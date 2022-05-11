const joi = require("joi");

const warehouseValidation = (warehouse) => {
  const warehouseValidationSchema = joi.object({
    streetAddress: joi.string().max(100).required(),
    city: joi.string().max(100).required(),
    state: joi.string().max(100).required(),
    country: joi.string().max(100).required(),
    pinCode: joi.number().required(),
  });

  return warehouseValidationSchema.validate(warehouse, { convert: false });
};

module.exports = warehouseValidation;
