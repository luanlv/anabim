let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  name: {type: String, default: 'name' },
  coverUrl: {type: String},
  slug: {type: String},
  description: {type: String, default: 'description'},
  created_at: {type: Date, default: Date.now}
}, { collection: 'category'});

schema.plugin(autoIncrement.plugin, 'Category')

let model = mongoose.model('Category', schema);

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
