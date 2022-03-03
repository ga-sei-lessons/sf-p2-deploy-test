require('dotenv').config()
const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)
const morgan = require('morgan')
const ejsLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

// middleware zone
app.use(morgan('tiny'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static('public'))
// allow POST actions from forms
app.use(express.urlencoded({ extended: true }))

// route zone
app.get('/', (req, res) => {
  res.render('index.ejs')
}) 

app.use('/works', require('./controllers/worksController'))
app.use('/faves', require('./controllers/favesController'))

app.listen(PORT, () => {
  console.log('server started!')
  rowdyResults.print()
  console.log(process.env.BING)
})