let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('../autoIncrement')

// const ImageSchema = require('./image').schema;
const categoryModel = require('../category/schema');
const softwareModel = require('../software/schema');


let schema = new Schema({
  name: {type: String},
  coverUrl: {type: String, default: '/image/coverUrl.jpg'},
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

module.exports.courseInCategory = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    categoryModel.findOne({slug: slug}).exec((err, category) => {
      if(err) reject(err)
      let query = {}
      query.cateID = category._id

        model.find(query).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
  });
};

module.exports.courseInSoftware = (root, {slug}) => {
  console.log("=============================================================================")
  console.log(slug)
  return new Promise((resolve, reject) => {
    softwareModel.findOne({slug: slug}).exec((err, software) => {
      console.log(software)
      if(err) reject(err)
      let query = {}
      query.softID = software._id

      model.find(query).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  });
};

module.exports.one = (root, {slug}) => {
  let query = {}
  if(slug !== undefined) query.slug = slug
  return new Promise((resolve, reject) => {

    model.aggregate([
      {
        $match: query
      },
      {
        $limit: 1
      },
      {
        $lookup: {
          from: 'category',
          localField: 'cateID',
          foreignField: '_id',
          as: 'categories'
        }
      },
      {
        $lookup: {
          from: 'software',
          localField: 'softID',
          foreignField: '_id',
          as: 'software'
        }
      },
      {
        $lookup: {
          from: 'course',
          localField: 'related',
          foreignField: '_id',
          as: 'relatedCourse'
        }
      }
    ], (err, data) => {
      console.log(data)

      if(err) reject(err)
      if (data.length < 1) {
        reject('')
      } else {
        resolve(data[0])
      }
    })

  });
};

module.exports.one2 = (root, {slug}) => {
  let query = {}
  if(slug !== undefined) query.slug = slug
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};
