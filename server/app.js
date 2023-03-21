const express = require("express");
const cors = require("cors");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index-api");
const usersRouter = require("./routes/users-api");
const groceryItemsRouter = require("./routes/groceryItems-api")
const kitchenItemsRouter = require("./routes/kitchenItems-api")
const recipesRouter = require("./routes/recipes-api");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/groceryItems", groceryItemsRouter)
app.use("/kitchenItems", kitchenItemsRouter)
app.use("/recipes", recipesRouter);

module.exports = app;
