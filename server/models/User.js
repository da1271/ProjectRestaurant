const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  userSchema = new Schema({
    username		 : String,
		email    : String,
		password : String,
    favorite : []
  })

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('users', userSchema)
