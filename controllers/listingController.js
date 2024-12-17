const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.listing = async (req, res) => {
  let allListings = await Listing.find({});
  res.render("./listings/Listings.ejs", { allListings });
};

module.exports.getNew = (req, res) => {
  res.render("./listings/new.ejs");
};

module.exports.postNew = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 2,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  let { listing } = req.body;
  const newListing = await new Listing(listing);
  newListing.image = { url, filename };
  newListing.owner = req.user._id;
  newListing.geometry = response.body.features[0].geometry;
  await newListing.save();

  req.flash("success", "New Listing Created !");
  res.redirect("/listings");
};

module.exports.getShow = async (req, res) => {
  let { id } = req.params;
  const show = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (show == null) {
    req.flash("error", "Listing Does Not Exist !");

    res.redirect("/listings");
  } else {
    res.render("./listings/show.ejs", {
      show,
      mapToken: process.env.MAP_TOKEN,
    });
  }
};

module.exports.getEdit = async (req, res) => {
  let { id } = req.params;
  const show = await Listing.findById(id);
  if (show == null) {
    req.flash("error", "Listing Does Not Exist !");
    return res.redirect("/listings");
  }

  let originalImageUrl = show.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("./listings/edit.ejs", { show, originalImageUrl });
};

module.exports.putEdit = async (req, res) => {
  let { id } = req.params;
  let { listing } = req.body;

  let newEdit = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    newEdit.image = { url, filename };
    await newEdit.save();
  }

  req.flash("success", "Listing Updated !");
  res.redirect(`/listings/${id}`);
  console.log(newEdit);
};

module.exports.delete = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing Deleted !");
  res.redirect("/listings");
};
