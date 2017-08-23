let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;
const courseModel = require('../course/schema');

let schema = new Schema({
  stt: {type: Number},
  courseId: {type: Number},
  section: {type: Number},
  name: {type: String},
  link: {type: String},
  kind: {type: String, default: 'free'},
  url: {type: String, default: 'null'},
  source: {type: String},
  time: {type: Number},
  created_at: {type: Date, default: Date.now}
}, { collection: 'video'});

schema.plugin(autoIncrement.plugin, 'Video')

let model = mongoose.model('Video', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.videoInCourse = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    courseModel.findOne({slug: slug}).exec((err, course) => {
      if(err) reject(err)
      let query = {}
      if(course) query.courseId = course._id

      model.find(query).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  });
};


module.exports.one = (root, {code}) => {
  let query = {}
  // if(code !== undefined) query.code = code
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
