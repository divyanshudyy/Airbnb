const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, loginAuth, authorAuth } = require("../middlewares.js");
const controller = require("../controllers/reviewController");

//Post Review
router.post("/", loginAuth, validateReview, wrapAsync(controller.post));

//Delete Review
router.delete(
  "/:reviewId",
  loginAuth,
  authorAuth,
  wrapAsync(controller.delete)
);

module.exports = router;
