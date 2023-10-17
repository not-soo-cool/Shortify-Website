const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./middlewares/passport')


if(process.env.NODE_ENV !== "production") {
    require("dotenv").config({path:"config/config.env"});
}

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// };

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));


//Using middlewares
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24*60*60*1000,
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:80",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Importing routes
const user = require("./routes/user");
const form = require("./routes/form");
const detailform = require("./routes/detail");
const auth = require("./routes/Authentication");

// Using routes
app.use("/api/v1", user);
app.use("/api/v1", form);
app.use("/api/v1", detailform);
app.use("/api/v1/auth", auth);
// app.use("/api/v1", detail);


module.exports = app;
