let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  code: String,
  kind: Number,
  price: Number,
  percent: Number,
  day: Number,
  month: [Number],
  active: {type: Boolean, default: true},
  quantity: Number,
  endTime: Date,
  created_at: {type: Date, default: Date.now}
}, { collection: 'coupon'});

schema.plugin(autoIncrement.plugin, 'Coupon')

let model = mongoose.model('Coupon', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.one = (root, {code}) => {
  let query = {}
  if(code !== undefined) query.code = code
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
