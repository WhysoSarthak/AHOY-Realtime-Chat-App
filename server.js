const express = require ('express')
const { listen } = require('express/lib/application')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http: listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send('Hello World')
})