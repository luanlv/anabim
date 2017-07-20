let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let findOrCreate = require('mongoose-findorcreate');
let autoIncrement = require('../autoIncrement')
var bcrypt = require("bcryptjs")

let UserSchema = new Schema({
  name: String,
  username: {type: String, default: 'abc@gmail.com'},
  uid: String,
  provider: String,
  accessToken: String,
  member: {type: String, default: 'none'},
  isAdmin: {type: Boolean, default: false},
  mustConfirmEmail: {type: Boolean, default: false},
  password: String,
  role: {type: [String], default: ['student']},
  info: {
    start: Date,
    end: Date
  },
  passwordChanged: {type: Boolean, default: false},
  createAt: {type: Date, default: Date.now}
}, {collection : 'user4'});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User')

let User = mongoose.model('User', UserSchema)

module.exports = User

module.exports.getUserByEmail = function(username, callback){
  User.find({username: username}, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) console.log(err);
    callback(null, isMatch);
  });
}

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      User.create(newUser, callback)
    });
  });
}

module.exports.changePassword = function(email, password, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if(err) throw err
      // console.log(hash)
      User.update({username: email}, {$set: {password: hash, passwordChanged: true}}, callback)
    });
  });
}


module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getMembership = () => {
  return new Promise((resolve, reject) => {
    User.find({member: 'membership'}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getTrialMember = () => {
  return new Promise((resolve, reject) => {
    User.find({member: 'trial'}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
