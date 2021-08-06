require("dotenv").config();
const express = require("express");
const router = require("./routes/router.js");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(express.json());
app.use(cors());

// Documentation as a plus
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT;

app.use("/", router);
app.listen(port || 8080, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
