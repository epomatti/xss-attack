const express = require('express')
const crypto = require('crypto');

const app = express()
const port = 3000

const database = {
  user: "Bob"
}

app.get('/', (req, res) => {
  const transactionId = req.query.txid;
  const response =
    `
<html>
<body>

<label>Transaction ID ${transactionId}</label>

</body>
</html>
`
  res.cookie('SECRET_COOKIE', crypto.randomUUID())
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
