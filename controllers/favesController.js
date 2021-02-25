const router = require('express').Router()
const db = require('../models')

// GET /faves - READ all faves
router.get('/', async (req, res) => {
  try {
    const works =  await db.work.findAll()
    res.render('faves/index.ejs', { works })
  } catch (error) {
    console.log(error)
  }
})

// POST /faves - CREATE new fave 
router.post('/', async (req, res) => {
  try {
    const newWork = await db.work.create({
      title: req.body.title,
      primaryimageurl: req.body.primaryimageurl
    })
    res.redirect('/faves')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router