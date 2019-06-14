const mongoose = require("mongoose");
const chalk = require("chalk");
const mongodbUri = "mongodb://:@ds337377.mlab.com:37377/instagram-colne";
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: "Erislandio",
    password: "Er1sl@ndio"
  }
});
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, chalk.bgRed("Erro!:")));

conn.once("open", () => {
  console.log(chalk.bgCyan("conectado a database Mlab"));
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
