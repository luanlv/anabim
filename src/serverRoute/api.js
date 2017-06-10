var express = require('express');
var router = express.Router();
var moment = require('moment')

const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Setting = mongoose.model('Setting')
const Information = mongoose.model('Information')
const Category = mongoose.model('Category')
const CategoryPost = mongoose.model('CategoryPost')
const Course = mongoose.model('Course')
const Software = mongoose.model('Software')
const Video = mongoose.model('Video')
const Price = mongoose.model('Price')
const Subscribe = mongoose.model('Subscribe')
const Coupon = mongoose.model('Coupon')
const User = mongoose.model('User')
const ActiveCode = mongoose.model('ActiveCode')
const IndexCourse = mongoose.model('IndexCourse')
const Session = mongoose.model('Session')
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
    if(err) return res.sendStatus(400)
    return res.send(resData)
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

// Category Post

router.post('/categorypost/new', bodyParser.json() ,(req, res) => {
  CategoryPost.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/categorypost/delete', bodyParser.json() ,(req, res) => {
  CategoryPost.remove({slug: req.body.slug}, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

router.post('/categorypost/update', bodyParser.json() ,(req, res) => {
  CategoryPost.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
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


//Video
router.post('/video/new', bodyParser.json() ,(req, res) => {
  Video.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/video/delete', bodyParser.json() ,(req, res) => {
  console.log(req.body.id)
  Video.remove({_id: req.body.id}, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
})

router.post('/video/update', bodyParser.json() ,(req, res) => {
  Video.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

//price
router.post('/price/update', bodyParser.json() ,(req, res) => {
  Price.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

//membership

router.post('/membership/action', bodyParser.json() ,(req, res) => {
  if(req.body.action) {
    Subscribe.update( {_id: req.body._id } ,{$set: {done: true, state: "Đồng ý"}}, (err, respond) => {
      if (err) throw err
      User.update({username: req.body.email}, {$set: {
        member: 'membership',
        info: {
          start: moment(),
          end: moment().add('months', req.body.month).add('days', req.body.bonusDay)
        }}}, (err, respond) => {
        if (err) throw err

        var r = new RegExp(req.body.email,'i');
        Session.remove({session: {$regex: r}}, (err, session) => {
          if (err) throw err
          return res.send(respond)
        })

      })
    })
  } else {
    Subscribe.update( {_id: req.body._id } ,{$set: {done: true, state: "Không đồng ý"}}, (err, respond) => {
      if (err) throw err
      User.update({username: req.body.email}, {$set: {
        member: 'none',
        }}, (err, respond) => {
        if (err) throw err

        var r = new RegExp(req.body.email,'i');
        Session.remove({session: {$regex: r}}, (err, session) => {
          if (err) throw err
          return res.send(respond)
        })

      })

      res.send(respond)
    })
  }
})

router.get('/membership/activebycode/:code', bodyParser.json() ,(req, res) => {
  ActiveCode.findOne({code: req.params.code}, function (err, resData) {
    if (err || !resData) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/membership/activebycode', bodyParser.json(), (req, res) => {

})

//user

router.post('/user/update', bodyParser.json() ,(req, res) => {
  User.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

// Active Code

router.post('/activecode/new', bodyParser.json() ,(req, res) => {
  ActiveCode.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/activecode/delete', bodyParser.json() ,(req, res) => {

  ActiveCode.remove({_id: req.body.id}, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
})

router.post('/activecode/update', bodyParser.json() ,(req, res) => {
  ActiveCode.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})

// Coupon

router.post('/coupon/new', bodyParser.json() ,(req, res) => {
  Coupon.create(req.body, (err, resData) => {
    if(err) return res.sendStatus(400)
    return res.send(resData)
  })
})

router.post('/coupon/delete', bodyParser.json() ,(req, res) => {

  Coupon.remove({_id: req.body.id}, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
})

router.post('/coupon/update', bodyParser.json() ,(req, res) => {
  Coupon.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
})


// indexCourse

router.post('/indexcourse/update', bodyParser.json() ,(req, res) => {
  IndexCourse.findOneAndUpdate({_id: req.body._id}, { $set: req.body}, { new: true }, function (err, resData) {
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
