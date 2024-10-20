const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

const catsRoutes = require("./routes/cats.routes");
const ExampleRoutes = require("./routes/example.routes");

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/examples", ExampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
