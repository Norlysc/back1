var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./project-root/routes/index");
var usersRouter = require("./project-root/routes/users");
var cooperativesRouter = require("./project-root/routes/cooperatives");

var app = express();

// Configuración de la vista
var path = require('path');
app.set("views", "./project-root/views");
app.set("view engine", "ejs");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Enrutadores
app.use("/", indexRouter);
app.use("/usuarios", usersRouter);
app.use("/cooperativas", cooperativesRouter);


const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${PUERTO}`);
});

module.exports = app;
