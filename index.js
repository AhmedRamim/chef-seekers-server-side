const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const chefs = require('./data/chefs.json')
app.use(cors())

app.get('/',(req,res) => {
    res.send(chefs)
})
app.get('/chefsdetails/:id',(req,res)=> {
    const id = req.params.id;
    const chefsDetails = chefs.find(ch => ch.id === id)
    res.send(chefsDetails)
})

app.listen(port,()=>console.log('assaignment is so hard'))