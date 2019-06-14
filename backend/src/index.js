const routes = require("./routes");
const mongoose = require("./database/index");
const express = require("express");
const path = require("path");
const chalk = require("chalk");
const PORT = 3333;
const CORS = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(CORS());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(routes);

server.listen(PORT, () => {
  console.log(chalk.bgCyan(`Server rodando na porta ${chalk.magenta(PORT)}`));
});
