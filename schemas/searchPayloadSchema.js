const Joi = require("joi");

const searchPayloadSchema = Joi.object({
  checkin: Joi.date().required(),
  checkout: Joi.date().min(Joi.ref("checkin")).required(),
}).options({ abortEarly: false });

module.exports = searchPayloadSchema;
