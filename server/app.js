const express = require("express");
const cors = require("cors");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index-api");
const usersRouter = require("./routes/users-api");
const foodItemsRouter = require("./routes/foodItems-api")
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
app.use("/api/users", usersRouter);
app.use("/api/foodItems", foodItemsRouter)
app.use("/api/groceryItems", groceryItemsRouter)
app.use("/api/kitchenItems", kitchenItemsRouter)
app.use("/api/recipes", recipesRouter);

module.exports = app;
