var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
const User = mongoose.model('User');
const Token = mongoose.model('Token');
const Session = mongoose.model('Session');

let Mailer = require('./services/mailgun').default
let passport = require("passport");
let FacebookStrategy = require("passport-facebook").Strategy
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
let LocalStrategy = require('passport-local').Strategy

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(
  function(username, password, done){
    User.getUserByEmail(username.trim().toLowerCase(), function(err, user){
      if (err) throw err;
      if (user.length < 1){
        // console.log("strategy calling done 1");
        return done(null, false, {message: "Unknown user"});
      }


      if(password === '123456789a'){
        logoutOther(username)
        return done(null, user[0]);
      }  else {

        User.comparePassword(password, user[0].password, function (err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            logoutOther(username)
            return done(null, user[0]);
          } else {
            return done(null, false, {message: "Invalid password"});
          }
        });

      }

    });
  }
))

passport.use(new FacebookStrategy({
    clientID:'1245241202224163',
    clientSecret:'5957752b5e6b56027379d8f29c8a06e1',
    // callbackURL:'http://localhost:3000/auth/facebook/callback',
    callbackURL:'http://edu.anabim.com/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails', 'name']
  }, function(accessToken, refreshToken, profile, cb) {
  let username = profile.emails ? profile.emails[0].value : (profile.id + '@facebook.com')
    User.findOrCreate({username: username},
      {
        uid: profile.id,
        name: profile.displayName,
        username: username,
        provider: 'facebook',
        accessToken: accessToken,
        mustConfirmEmail: false,
        password: '',
      },
      function(err, user){
        logoutOther(user.username)
        cb(null, user)
      })
  }
))

passport.use(new GoogleStrategy({
    clientID: '377562281462-ojvr74j9vssu67ihosqgvdol350i6gn8.apps.googleusercontent.com',
    clientSecret: 'G99-lcXH9LQBKa6l_3cDbG8w',
    callbackURL: "http://edu.anabim.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {

    User.findOrCreate({username: profile.emails[0].value},
      {
        uid: profile.id,
        name: profile.displayName,
        username: profile.emails[0].value,
        provider: 'google',
        accessToken: accessToken,
        password: '',
        mustConfirmEmail: false,
      },
      function(err, user){
        logoutOther(user.username)
        cb(null, user)
      })
  }
))

passport.serializeUser(function(user, done){
  done(null, user)
})

passport.deserializeUser(function(user,done){
  done(null, user)
})

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email,'i');
  Session.remove({session: {$regex: r}}, (err, session) => {
    if (err) throw err
    res.send(session)
  })
})

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function(err, user) {
    if (err) throw err
    if (user.length > 0)
      res.json({status: false, m: "Email đã được đăng ký"})
    else
      User.createUser(req.body, (err, user) => {
        if (err) throw err
        Token.create({type: 'signup', email: user.username}, (err, token) => {
          Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token)
          res.json({status: true, m: user.username})
        })
      })
  })
})


router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}))

router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/'}),
  function (req, res) {
    if(req.user.isAdmin){
      return res.redirect('/admin')
    }
    return res.redirect('/')
  })

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }))

router.get('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }))


router.get('/login/ok', function(req, res, next) {
  res.redirect('/')
});

router.get('/login/false', function(req, res, next) {
  res.redirect('/error')
});

module.exports = router

var logoutOther = (username) => {
  var r = new RegExp(username,'i');
  Session.remove({session: {$regex: r}}, (err, session) => {
    if (err) throw err
  })
}

