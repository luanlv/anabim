let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')
let uuid = require('node-uuid')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  token: {type: String, default: uuid.v1},
  type: String,
  email: String,
  active: {type: Boolean, default: false},
  created_at: {type: Date, default: Date.now}
}, { collection: 'token'});

schema.plugin(autoIncrement.plugin, 'Token')

let model = mongoose.model('Token', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.one = (root, {token}) => {
  let query = {}
  if(token !== undefined) query.token = token
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
