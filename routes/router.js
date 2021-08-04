const express = require("express");
const SchemaValidator = require("../middlewares/schemaValidator");
const searchPayloadSchema = require("../schemas/searchPayloadSchema");
const router = express.Router();
const validator = new SchemaValidator();

router.get("/", (req, res) => {
  res.send("Hello Asksuite World!");
});

router.post("/search", validator.validate(searchPayloadSchema), (req, res) => {
  return res.send();
});

module.exports = router;
