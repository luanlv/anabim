var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Setting = mongoose.model('Setting')
const Information = mongoose.model('Information')
const Category = mongoose.model('Category')
const Course = mongoose.model('Course')
const Software = mongoose.model('Software')
const Seo = mongoose.model('Seo')
let bodyParser = require('body-parser')
let Mailer = require('./services/mailgun');
let axios = require('axios')


let video = require('./api/video').default
let course = require('./api/course').default
let category = require('./api/category').default
let activecode = require('./api/activecode').default
let comment = require('./api/comment').default
let coupon = require('./api/coupon').default
let image = require('./api/image').default
let software = require('./api/software').default
let price = require('./api/price').default
let membership= require('./api/membership').default
let indexcourse = require('./api/indexcourse').default
let search = require('./api/search').default
let user = require('./api/user').default


router.use('/search', search)
router.use('/video', video)
router.use('/course', course)
router.use('/category', category)
router.use('/activecode', activecode)
router.use('/comment', comment)
router.use('/coupon', coupon)
router.use('/image', image)
router.use('/software', software)
router.use('/price', price)
router.use('/membership', membership)
router.use('/indexcourse', indexcourse)
router.use('/user', user)



router.post('/post/new', bodyParser.json() ,(req, res) => {
  Post.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/post/delete', bodyParser.json() ,(req, res) => {
  Post.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/post/update', bodyParser.json() ,(req, res) => {
  Post.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/setting/update', bodyParser.json() ,(req, res) => {
  Setting.findOneAndUpdate({id: "setting"}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
})

router.post('/information/update', bodyParser.json() ,(req, res) => {
  console.log('update !!!!!!!')
  console.log(req.body)
  Information.findOneAndUpdate({id: "information"}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
})

router.post('/category/new', bodyParser.json() ,(req, res) => {
  Category.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/category/delete', bodyParser.json() ,(req, res) => {
  Category.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/category/update', bodyParser.json() ,(req, res) => {
  Category.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})


// software
router.post('/software/new', bodyParser.json() ,(req, res) => {
  Software.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/software/delete', bodyParser.json() ,(req, res) => {
  Software.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/software/update', bodyParser.json() ,(req, res) => {
  Software.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

// Course
router.post('/course/new', bodyParser.json() ,(req, res) => {
  Course.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/course/delete', bodyParser.json() ,(req, res) => {
  Course.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/course/update', bodyParser.json() ,(req, res) => {
  Course.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})


// SEO

router.post('/seo/new', bodyParser.json() ,(req, res) => {
  Seo.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/seo/update', bodyParser.json() ,(req, res) => {
  Seo.findOneAndUpdate({url: req.body.url}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})











module.exports = router;
