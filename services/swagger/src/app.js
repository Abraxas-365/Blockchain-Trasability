const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const swaggerUi = require("swagger-ui-express");
try {
  const swaggerDoc = require("./openapi.json");
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
} catch (error) {
  console.error("Error loading Swagger json: ", error);
}

app.listen(3010, "0.0.0.0", () => {
  console.log(`🚀 Server started: http://localhost:3010/doc`);
});
