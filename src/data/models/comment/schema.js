let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  kind: {type: String},
  parentID: {type: Number},
  users: [Number],
  comment: String,
  userId: String,
  time: Date,
  children: [],
  created_at: {type: Date, default: Date.now}
}, { collection: 'comment'});

schema.plugin(autoIncrement.plugin, 'Comment')

let model = mongoose.model('Comment', schema);

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
