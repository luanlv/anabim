let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  _id: String,
  session: String,
  expires: Date
}, { collection: 'sessions'});


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
