var {index, create, show, update, destroy} = require('../controllers/restaurants.js'),
    {search} = require('../controllers/yelp.js')
	express  = require('express'),
	router   = express.Router()

	router.route('/search')
	.get(search)
// /api/restaurants/ routes:
// router.route('/')
// 	.get(index)
// 	.post(create)
//
// // /api/restaurants/:id routes:
// router.route('/:id')
// 	.get(show)
// 	.patch(update)
// 	.delete(destroy)

	// .post(postSearch);

module.exports = router
