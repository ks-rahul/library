const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const socket = require("socket.io");
const cors = require("cors");

// variables
dotenv.config();

// user model
const User = require("./src/api/model/user");

// DB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// configure passport and sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  global.chatSocket = socket;
});

app.get("/test", (req, res) => {
  res.json({ name: "App", score: "200" });
});
