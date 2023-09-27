const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const { database } = require("./config/keys");
const chalk = require("chalk");
const routes = require("./routes");

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);
app.use(morgan("combined"));

mongoose.set("useCreateIndex", true);
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`)
  )
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(
      PORT,
      console.log(
        `${chalk.green("✓")} ${chalk.blue(
          "Server Started on port"
        )} ${chalk.bgMagenta.white(PORT)}`
      )
    );
  })
  .catch((err) => console.log(err));
