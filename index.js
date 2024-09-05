require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/coding", (req, res) => {
    res.send('CodingJsBackend')
})

app.get("/login", (req, res) => {
    res.send('<h1> Please login </h1>')
})

app.get("/chai", (req, res) => {
    res.send("to take a Chai")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})