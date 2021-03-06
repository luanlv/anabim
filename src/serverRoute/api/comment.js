import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Comment = mongoose.model('Comment')

router.get('/get', (req, res) => {
  Comment.find({}, (err, comments) => {
    if(err) return res.sendStatus(400)
    res.send(comments)
  })
})


export default router;
