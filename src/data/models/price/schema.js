let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  one: Number,
  three: Number,
  six: Number,
  twelve: Number,
  created_at: {type: Date, default: Date.now}
}, { collection: 'price'});

schema.plugin(autoIncrement.plugin, 'Price')

let model = mongoose.model('Price', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.one = (root, {}) => {
  let query = {}
  // if(code !== undefined) query.code = code
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
