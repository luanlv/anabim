let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  session: String,
  expires: {type: Date, default: Date.now}
}, { collection: 'sessions'});

schema.plugin(autoIncrement.plugin, 'Session')

let model = mongoose.model('Session', schema);

module.exports = model;


module.exports.one = (root, {}) => {
  let query = {}
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
