// var restaurant = require('../models/Restaurant.js')
//
// // GET /api/restaurants
// // INDEX action to display all restaurants
// function index(req, res) {
// 	Restaurant.find({}, function(err, resaurants){
//     	// return 404 if there's an error:
//     	if(err) res.status(404).send(err)
//
//     	// otherwise send json back with 200 success header:
//     	res.status(200).send(restaurants)
// 	})
// }
//
// // POST /api/restaurants
// // CREATE action to add a new restaurant
// function create(req, res, next) {
// 	var restaurant = new Restaurant(req.body)
//
// 	restaurant.save(function(err, restaurant) {
// 	    // return 500 if there's an error:
// 	    if(err) res.status(500).send(err)
//
// 	    // otherwise send restaurant json back with 201 create success header:
// 	    res.status(201).send(restaurant)
// 	})
// }
//
// // GET /api/restaurants/:id
// // SHOW action to return a single restaurant
// function show(req, res) {
// 	Restaurant.find({_id: req.params.id}, function(err, restaurant){
// 	    // return 404 if there's an error:
// 	    if(err) res.status(404).send(err)
//
// 	    // otherwise send restaurant json back with 200 success header:
// 	    res.status(200).send(restaurant)
// 	})
// }
//
// // PATCH /api/restaurants/:id
// // UPDATE action to update a single restaurant
// function update(req, res) {
// 	Bean.findById({_id: req.params.id}, function(err, restaurant) {
// 		// Return 404 if restaurant not found:
// 		if(err) res.status(404).send(err)
//
// 		// Only update attributes submitted, don't null anything out:
// 	    if(req.body.name) restaurant.name = req.body.name
// 	    if(req.body.quantity) restaurant.quantity = req.body.quantity
//
// 	    restaurant.save(function(err) {
// 			// return 500 if there's an error:
// 		    if(err) res.status(500).send(err)
//
// 		    // otherwise send restaurant json back with 200 success header:
// 		    res.status(200).send(restaurant)
// 	    })
// 	})
// }
//
// // DELETE /api/restaurants/:id
// // DESTROY action to delete a single restaurant
// function destroy(req, res) {
// 	Restaurant.remove({_id: req.params.id}, function(err){
//     // return 500 if there's an error:
//     if(err) res.status(500).send(err)
// 	    // otherwise send restaurant json back with 200 success header:
// 	    res.status(200).send({message: "Restaurant deleted successfully"})
// 	})
// }
//
// module.exports = {
// 	index: index,
// 	create: create,
// 	show: show,
// 	update: update,
// 	destroy: destroy
// }
