const express = require('express')
const router = express.Router()
const detail = require('../model/detail.js')

router.get('/', async (req, res)=> {
    try {
        const details = await detail.find()
        res.json(details)
        console.log("GET of detail.js is executing")
    } catch (err) {
        console.log(`Error occured${err}`)
    }
})

router.post('/', async (req, res)=> {

    // console.log(req.body.name)
    const postDetail = new detail({
        name: req.body.name,
        age: req.body.age
    })    
    try {
        const a1 = await postDetail.save()
        res.json(a1)
    } catch (err) {
        console.log("Error occured"+err)
    }
})

module.exports = router