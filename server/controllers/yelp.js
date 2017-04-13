var passport  = require('passport'),
    yelpApiV3 = require("yelp-api-v3");

var yelp      = new yelpApiV3({
  app_id      : process.env.YELP_ID,
  app_secret  : process.env.YELP_SECRET
});


function search(req, res) {
  console.log(req.query)
  var searchTerm = req.query.term,
      openNow    = req.query.open === 'true' ? true : false,
      price      = String(req.query.price),
      zipSearch  = req.query.zip,
      rating = 4


  console.log('price:', price);

  yelp.search({term: searchTerm, location: zipSearch, categories:'restaurants', open_now: openNow, price: price, rating: rating})
  .then(function (data) {

    var jsonString = JSON.parse(data);
    res.json({businesses: jsonString.businesses});
    console.log(jsonString.businesses)
  })
  .catch(function (err) {
      console.log('not working')
      console.error(err);
  });
}

// function postSearch(req, res) {
//   // if (req.body.zipSearch === '')
//   //   res.redirect('search/?term=' + req.body.searchTerm + '&open=' + req.body.openNow + '&price=' + req.body.price);
//
//   res.redirect('restaurants/search/?term=' + req.body.searchTerm + '&zip=' + req.body.zipSearch + '&open=' + req.body.openNow + '&price=' + req.body.price);
// }


module.exports = {
  search: search

}
