const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
app.use(cors())

app.get('/',(req,res) => {
    res.send(chefs)
})

// app.listen(port,)