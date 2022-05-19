const express = require('express')
const fs = require('fs')

const PORT = process.env.PORT || 8080;
const app = express()
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`))
app.get('/productos', (req, res) => {
    
    res.send(JSON.parse(fs.readFileSync('data.json' , 'utf8')))
    
})

app.get('/productoRandom' ,(req, res) => {
    let productos = JSON.parse(fs.readFileSync('data.json' , 'utf8'))
    res.send(JSON.parse(fs.readFileSync('data.json' , 'utf8'))[Math.floor(Math.random() * productos.length)])
})