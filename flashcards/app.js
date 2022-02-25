const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app properties
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

const routes = require("./routes");
const cardRoutes = require("./routes/cards");

app.use(routes);
app.use("/cards", cardRoutes);

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render("error");
// });

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}/`);
});
