const Joi = require("joi");
const { DateTime } = require("luxon");

const searchPayloadSchema = Joi.object({
  checkin: Joi.date()
    .min(DateTime.now().plus({ days: -1 }).toISO())
    .iso()
    .required(),
  checkout: Joi.date().min(Joi.ref("checkin")).required(),
}).options({ abortEarly: false });

module.exports = searchPayloadSchema;
