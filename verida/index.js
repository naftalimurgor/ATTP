const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.post('/create-verida-vault-cb', (req, res) => {
 // add vault for use
})

app.post('/authenticate-verida-account', (req, res) => {
// get token
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})