//SAMPLE DATA FOR INITIALIZATION
// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Seaside Escape in Cornwall",
//     description:
//       "Nestled on the cliffs of Cornwall, this serene retreat offers breathtaking ocean views and access to scenic hiking trails.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1300,
//     location: "Cornwall",
//     country: "United Kingdom",
//   },

//   {
//     title: "Eco-Friendly Treehouse in Costa Rica",
//     description:
//       "Stay above the canopy in this unique, eco-friendly treehouse. Perfect for eco-conscious travelers seeking adventure.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJlZWhvdXNlJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Monteverde",
//     country: "Costa Rica",
//   },

//   {
//     title: "Tropical Bungalow on the Maldives",
//     description:
//       "Stay above the crystal-clear waters in this overwater bungalow. A perfect tropical hideaway in the Maldives.",
//     image: {
//       filename: "ListingImage",
//       url: "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZGl2ZXMlMjBidW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Malé",
//     country: "Maldives",
//   },
// ];

const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description: "A stunning villa with ocean views and a private pool.",
    image: {
      url: "https://example.com/images/beachfront.jpg",
      filename: "beachfront_villa",
    },
    price: 25000,
    location: "Malibu, California",
    country: "USA",
    reviews: [],
    owner: "65fd123456abcdef78901234",
    geometry: {
      type: "Point",
      coordinates: [-118.799, 34.025],
    },
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "Experience nature in this cozy wooden cabin with a fireplace.",
    image: {
      url: "https://example.com/images/mountain_cabin.jpg",
      filename: "mountain_cabin",
    },
    price: 18000,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: "65fd56789abcdef123456789",
    geometry: {
      type: "Point",
      coordinates: [-106.819, 39.191],
    },
  },
  {
    title: "Modern City Apartment",
    description:
      "A stylish apartment in the heart of downtown with skyline views.",
    image: {
      url: "https://example.com/images/city_apartment.jpg",
      filename: "city_apartment",
    },
    price: 12000,
    location: "New York City, New York",
    country: "USA",
    reviews: [],
    owner: "65fd98765abcdef543210987",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.712],
    },
  },
  {
    title: "Rustic Countryside Cottage",
    description: "A peaceful retreat surrounded by nature and rolling hills.",
    image: {
      url: "https://example.com/images/cottage.jpg",
      filename: "countryside_cottage",
    },
    price: 9000,
    location: "Tuscany",
    country: "Italy",
    reviews: [],
    owner: "65fd23456789abcdef654321",
    geometry: {
      type: "Point",
      coordinates: [11.255, 43.767],
    },
  },
  {
    title: "Skyline Penthouse Suite",
    description:
      "A luxurious penthouse with a rooftop terrace and 360° city views.",
    image: {
      url: "https://example.com/images/penthouse.jpg",
      filename: "penthouse_suite",
    },
    price: 40000,
    location: "Dubai",
    country: "UAE",
    reviews: [],
    owner: "65fdabcdef1234567890abcd",
    geometry: {
      type: "Point",
      coordinates: [55.27, 25.204],
    },
  },
  {
    title: "Secluded Jungle Treehouse",
    description:
      "A magical treehouse deep in the rainforest with breathtaking views.",
    image: {
      url: "https://example.com/images/treehouse.jpg",
      filename: "jungle_treehouse",
    },
    price: 15000,
    location: "Bali",
    country: "Indonesia",
    reviews: [],
    owner: "65fdabc123456789abcdef01",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },
  {
    title: "Desert Dome Retreat",
    description: "A unique eco-friendly dome stay under the starry desert sky.",
    image: {
      url: "https://example.com/images/desert_dome.jpg",
      filename: "desert_dome",
    },
    price: 22000,
    location: "Wadi Rum",
    country: "Jordan",
    reviews: [],
    owner: "65fdabc23456789abcdef02",
    geometry: {
      type: "Point",
      coordinates: [35.4194, 29.5766],
    },
  },
  {
    title: "Lakeside Wooden Cabin",
    description: "A peaceful lakeside retreat with a private dock and canoe.",
    image: {
      url: "https://example.com/images/lakeside_cabin.jpg",
      filename: "lakeside_cabin",
    },
    price: 13000,
    location: "Lake Tahoe, California",
    country: "USA",
    reviews: [],
    owner: "65fdabc3456789abcdef03",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },
  {
    title: "Historic Parisian Loft",
    description: "A charming loft with antique decor in the heart of Paris.",
    image: {
      url: "https://example.com/images/paris_loft.jpg",
      filename: "paris_loft",
    },
    price: 27500,
    location: "Paris",
    country: "France",
    reviews: [],
    owner: "65fdabc456789abcdef04",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },
  {
    title: "Santorini Cliffside Suite",
    description:
      "A luxurious suite with a private infinity pool overlooking the sea.",
    image: {
      url: "https://example.com/images/santorini_suite.jpg",
      filename: "santorini_suite",
    },
    price: 35000,
    location: "Santorini",
    country: "Greece",
    reviews: [],
    owner: "65fdabc56789abcdef05",
    geometry: {
      type: "Point",
      coordinates: [25.4605, 36.3932],
    },
  },
  {
    title: "Snowy Alpine Chalet",
    description: "A cozy chalet with a fireplace and stunning mountain views.",
    image: {
      url: "https://example.com/images/alpine_chalet.jpg",
      filename: "alpine_chalet",
    },
    price: 20000,
    location: "Zermatt",
    country: "Switzerland",
    reviews: [],
    owner: "65fdabc6789abcdef06",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
  },
  {
    title: "Floating Overwater Bungalow",
    description:
      "A private overwater bungalow with direct access to crystal-clear waters.",
    image: {
      url: "https://example.com/images/overwater_bungalow.jpg",
      filename: "overwater_bungalow",
    },
    price: 45000,
    location: "Bora Bora",
    country: "French Polynesia",
    reviews: [],
    owner: "65fdabc789abcdef07",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
  },
];

module.exports = { data: sampleListings };
