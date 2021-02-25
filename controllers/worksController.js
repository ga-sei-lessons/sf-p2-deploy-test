const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res) => {
  const requestString = `http://api.harvardartmuseums.org/object?apikey=${process.env.API_KEY}&title=<${req.params.term}&size=30`
  const apiRes = await axios.get(requestString) 
  // console.log(apiRes.data.records)
  const records = apiRes.data.records

  let filteredRecords = []

  for(record of records) {
    if(record.primaryimageurl) filteredRecords.push(record)
  }
  // console.log(filteredRecords)
  res.render('works/searchResults.ejs', { works: filteredRecords })
})

module.exports = router