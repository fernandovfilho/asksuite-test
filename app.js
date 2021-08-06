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

app.use("/", router);

module.exports = app;
