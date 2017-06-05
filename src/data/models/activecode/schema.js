let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

let schema = new Schema({
  code: {type: String, default: 'code'},
  day: {type: Number, default: 0},
  email: {type: String, default: 'default@email.com'},
  all: {type: Boolean, default: false},
  quantity: {type: Number, default: 0},
  used: {type: Boolean, default: false},
  created_at: {type: Date, default: Date.now}
}, { collection: 'activecode'});

schema.plugin(autoIncrement.plugin, 'ActiveCode')

let model = mongoose.model('ActiveCode', schema);

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
