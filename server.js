require("dotenv").config();
const app = require("./app");
const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
