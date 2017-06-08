let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  title: {type: String, default: 'name' },
  slug: {type: String},
  created_at: {type: Date, default: Date.now}
}, { collection: 'categorypost'});

schema.plugin(autoIncrement.plugin, 'CategoryPost')

let model = mongoose.model('CategoryPost', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.one = (root, {slug}) => {
  let query = {}
  if(slug !== undefined) query.slug = slug
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
