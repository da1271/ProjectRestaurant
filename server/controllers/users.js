
var User = require('../models/User')


function addFavorite (req, res) {
  User.findById(req.user, function (err, user) {
    if (err) throw err
    console.log(req.body)
    user.favorite.push(req.body)
    user.save(function(err, user){
      if (err) throw err
      res.json(user)
    })
  })
}

module.exports = {
  addFavorite: addFavorite
}
