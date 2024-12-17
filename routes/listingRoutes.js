const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { loginAuth, ownerAuth, validateListing } = require("../middlewares.js");
const controller = require("../controllers/listingController.js");

const { storage } = require("../cloudConfig.js");
const multer = require("multer");
const upload = multer({ storage });

//CREATE ROUTE
router.get("/new", loginAuth, controller.getNew);

router
  .route("/")
  //LISTING ROUTE
  .get(wrapAsync(controller.listing))
  //CREATE ROUTE
  .post(
    loginAuth,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(controller.postNew)
  );

router
  .route("/:id")
  //SHOW ROUTE
  .get(wrapAsync(controller.getShow))
  //UPDATE ROUTE
  .put(
    loginAuth,
    ownerAuth,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(controller.putEdit)
  )
  //DELETE ROUTE
  .delete(loginAuth, ownerAuth, wrapAsync(controller.delete));

//UPDATE ROUTE
router.get("/:id/edit", loginAuth, ownerAuth, wrapAsync(controller.getEdit));

module.exports = router;
