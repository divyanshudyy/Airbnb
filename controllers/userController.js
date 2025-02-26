const User = require("../models/users.js");

module.exports.getSignup = (req, res) => {
  res.render("./users/signup.ejs");
};

module.exports.postSignup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = await new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome");
      res.redirect("/");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/account/signup");
  }
};

module.exports.getLogin = (req, res) => {
  res.render("./users/login.ejs");
};

module.exports.postLogin = async (req, res) => {
  req.flash("success", "Logged in Successfully !");
  let redirectUrl = res.locals.redirectUrl;

  if (redirectUrl) {
    res.redirect(redirectUrl);
  } else {
    res.redirect("/");
  }
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    return next(err);
  });
  req.flash("success", "You are logged out");
  res.redirect("/");
};
