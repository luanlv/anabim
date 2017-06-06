var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

const Token = mongoose.model('Token')
const User = mongoose.model('User')


router.get('/active/:token', (req, res) => {
  Token.findOne({token: req.params.token, type: 'signup', active: false}, (err, token) => {
    if (err) throw err
    if (!token)
      res.redirect('/')
    else
      User.update(
        {
          username: token.email
        },{
          $set: {
            emailConfirm: true
          }
        }, (err, user) => {
          Token.update({token: req.params.token}, {$set: {active: true}}, (err, token) => {
            res.redirect('/?login=true')
          })
        })
  })
})


module.exports =  router
