const db = require('./models')

async function dbTest() {
  const work = await db.work.create({
    title: 'test work',
    primaryimageurl: 'www.test.com'
  })

  console.log(work)
}

dbTest()