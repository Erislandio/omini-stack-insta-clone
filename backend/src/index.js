const mongoose = require("./database/index");
const routes = require("./routes");
const express = require("express");
const path = require("path");
const app = express();
const chalk = require("chalk");
const PORT = 3333;

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(routes);

app.listen(PORT, () => {
  console.log(chalk.bgCyan(`Server rodando na porta ${chalk.magenta(PORT)}`));
});
