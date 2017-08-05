import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const ActiveCode = mongoose.model('ActiveCode')

router.get('/get', (req, res) => {
  ActiveCode.find({}, (err, activecodes) => {
    if(err) return res.sendStatus(400)
    res.send(activecodes)
  })
})


export default router;
