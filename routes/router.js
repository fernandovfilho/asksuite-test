const express = require("express");
const searchController = require("../controllers/SearchController");
const SchemaValidator = require("../middlewares/SchemaValidator");
const searchPayloadSchema = require("../schemas/searchPayloadSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Asksuite World!");
});

// PS: According to the REST standard to fetch data from a resource GET method is used
// Suggestion: Change this route to GET Method and pass search params in Query Parameters
router.post(
  "/search",
  SchemaValidator.validate(searchPayloadSchema),
  searchController.roomSearch
);

module.exports = router;
