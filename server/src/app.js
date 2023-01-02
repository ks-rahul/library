const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");

const errorHandlerMiddleware = require("./api/middleware/errorHandler");

// variables
dotenv.config();

// user model
const User = require("./api/model/user");

// DB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("DB Connected");
});

mongoose.set("strictQuery", false);

mongoose.Promise = global.Promise;

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const app = express();

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// app.use(function (req, res, next) {
//   if (
//     req.headers &&
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "JWT"
//   ) {
//     jsonwebtoken.verify(
//       req.headers.authorization.split(" ")[1],
//       process.env.SECRET,
//       function (err, decode) {
//         if (err) req.user = undefined;
//         req.user = decode;
//         next();
//       }
//     );
//   } else {
//     req.user = undefined;
//     next();
//   }
// });

// configure passport and sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

// routes
const authRoutes = require("./api/routes/userRoutes");

app.use(authRoutes);

// catch 404 and forward to error handler
app.use(errorHandlerMiddleware);

module.exports = app;
