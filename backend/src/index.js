const mongoose = require("./database/index");
const express = require("express");
const app = express();
const chalk = require("chalk");
const PORT = 3333;

app.get("/", (req, res) => {
  res.send({
    ok: true
  });
});

app.listen(PORT, () => {
  console.log(chalk.bgCyan(`Server rodando na porta ${chalk.magenta(PORT)}`));
});
