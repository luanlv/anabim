import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Subscribe = mongoose.model('Subscribe')
const User = mongoose.model('User')

router.get('/get', (req, res) => {
  Subscribe.find({email: req.user.username}, (err, subscribe) => {
    if(err) return res.sendStatus(400)
    res.json(subscribe)
  })
})

router.post('/', bodyParser.json(), (req, res) => {
  req.body.email = req.user.username
  req.body.name = req.user.name
  console.log(req.body)
  Subscribe.create(req.body, (err, sub) => {
    if (err) return res.sendStatus(400)
    User.update({username: req.user.username}, {$set: {member: 'pending'}}, (err, status) => {
      if(err) return res.sendStatus(400)
      req.user.member = 'pending'
      res.send('pending')
    })
  })
})

router.get('/', (req, res) => {
  if (!req.user)
    res.sendStatus(400)
  else
    Subscribe.find({email: req.user.username}, (err, subscrible) => {
      if(err) throw err
      if(subscrible.length < 1) return res.sendStatus(400)
      res.send(subscrible[0])
    })
})


export default router;
