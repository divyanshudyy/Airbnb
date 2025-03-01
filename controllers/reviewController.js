const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.post = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  console.log(req.params._id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  console.log(newReview);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  console.log("Review Saved");

  req.flash("success", "New Review Created !");
  res.redirect(`/${listing._id}`);
};

module.exports.delete = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findById(reviewId);
  req.flash("success", "Review Deleted !");
  res.redirect(`/${id}`);
};
