let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')
const Coupon = require('../coupon/schema').schema;
// const ImageSchema = require('./image').schema;

let schema = new Schema({
  done: {type: Boolean, default: false},
  state: {type: String, default: 'pending'},
  email: String,
  name: String,
  phone: String,
  month: Number,
  bonusDay: {type: Number, default: 0},
  price: {type: Number, default: 0},
  info: String,
  coupon: Coupon,
  created_at: {type: Date, default: Date.now},
  createAt: {type: Date, default: Date.now}
}, { collection: 'subscribe'});

schema.plugin(autoIncrement.plugin, 'Subscribe')

let model = mongoose.model('Subscribe', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.allPending = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({done: false}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.allDone = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({done: true}).exec((err, res) => {
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
