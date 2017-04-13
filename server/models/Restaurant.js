var mongoose = require('mongoose')

var restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,

})

//sets variable for model
var Restaurant = mongoose.model('Restaurant', restaurantSchema)

//exports module
module.exports = Restaurant
