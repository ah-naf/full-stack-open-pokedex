// eslint-disable-next-line
const express = require('express')
const app = express()

// get the port from env variable
// eslint-disable-next-line
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {})
