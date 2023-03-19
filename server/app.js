const express = require("express");
const cors = require("cors");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const foodItemsRouter = require("./routes/foodItems")
const recipesRouter = require("./routes/recipes");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/users/login", usersRouter);
app.use("/users/logout", usersRouter);
app.use("/foodItems", foodItemsRouter)
//app.use("/users/signup", userRouter);

app.use("/recipes", recipesRouter);

module.exports = app;
