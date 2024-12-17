const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const { userSchema } = require("../validateSchema.js");

const passport = require("passport");
const { saveUrl } = require("../middlewares.js");

const controller = require("../controllers/userController.js");

router
  .route("/signup")
  .get(controller.getSignup)
  .post(wrapAsync(controller.postSignup));

router
  .route("/login")
  .get(controller.getLogin)
  .post(
    saveUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    controller.postLogin
  );

router.get("/logout", controller.logout);

module.exports = router;
