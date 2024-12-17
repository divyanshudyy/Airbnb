//EXPRESS IMPORTS
const express = require("express");
const app = express();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const DB_URL = process.env.ATLAS_DB_URL;

//DATABASE CODE IMPORTS
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");

//EXPRESS SESSION
const session = require("express-session");
const flash = require("connect-flash");
app.use(flash());
const MongoStore = require("connect-mongo");

const store = MongoStore.create({
  mongoUrl: DB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3000,
});

store.on("error", () => {
  console.log("Error in Mongo Session Store", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now * 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

const User = require("./models/users.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ERROR HANDLING IMPORTS
const ExpressError = require("./utils/ExpressError.js");

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

//DATABASE CONNECTION SETUP
main()
  .then(() => {
    console.log("Connected to Atlas DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(DB_URL);
  //"mongodb://127.0.0.1:27017/wanderLust"
}

//DEFINING PATH
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//PARSING DATA
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//OVERRIDE NPM
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.listen(4000, (req, res) => {
  console.log(`Server is running on port: ${4000}`);
});

//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  let { status = 500, message = "something Wrong" } = err;
  res.status(status).render("./errors/error.ejs", { err });
  // console.log(err);
});

//FLASH MIDDLEWARE
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.get("/demoUser", async (req, res) => {
  let fakeUser = new User({
    email: "abc@gmail.com",
    username: "abc-student",
  });
  const registeredUser = await User.register(fakeUser, "Helloworld");
  res.send(registeredUser);
});

//Routes
const listingRoute = require("./routes/listingRoutes.js");
const reviewRoute = require("./routes/reviewRoutes.js");
const userRoute = require("./routes/userRoutes.js");

//Use Routes
app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);
app.use("/", userRoute);

// //NON EXISTING ROUTES
// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });
