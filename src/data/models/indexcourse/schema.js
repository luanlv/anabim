let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;
const CategorySchema = require('../category/schema').schema;
const CourseSchema = require('../course/schema').schema;

let schema = new Schema({
  category: CategorySchema,
  courses: [CourseSchema],
  created_at: {type: Date, default: Date.now}
}, { collection: 'indexcourse'});

schema.plugin(autoIncrement.plugin, 'IndexCourse')

let model = mongoose.model('IndexCourse', schema);

module.exports = model;



module.exports.one = (root, {}) => {
  let query = {}
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
