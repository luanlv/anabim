let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  name: {type: String},
  coverUrl: {type: String},
  slug: String,
  cateID: [Number],
  softID: [Number],
  level: Number,
  authorId: String,
  section: [String],
  description: String,
  vote: Number,
  numVote: Number,
  voter: [Number],
  documents: String,
  related: [Number],
  created_at: {type: Date, default: Date.now}
}, { collection: 'course'});

schema.plugin(autoIncrement.plugin, 'Course')

let model = mongoose.model('Course', schema);

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
