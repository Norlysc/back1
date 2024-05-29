var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loansRouter = require("./routes/loans");
var savingsRouter = require("./routes/savings");
var cooperativesRouter = require("./routes/cooperatives");

var app = express();

// Configuración de la vista
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Enrutadores
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/loans", loansRouter);
app.use("/savings", savingsRouter);
app.use("/cooperatives", cooperativesRouter);

module.exports = app;
