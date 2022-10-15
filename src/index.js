const express = require("express");
const morgan = require("morgan");
const { config } = require("./config/config");
const { errorHandler, logErrors } = require("./middlewares/error.handler");

//Initializing
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(require("./routes/index.routes"));
app.use("/genres", require("./routes/genres.routes"));

//Error Middlewares
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log("server on port:", config.port);
});
