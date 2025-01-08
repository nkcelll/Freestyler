const express = require('express')

const app = express()
app.use(express.json())

const PORT = 9876


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})