'use strict'

const express = require('express')
const app = express()
const port = 4000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

console.log('*********')
console.log(' directorio actual = ', __dirname)
console.log('*********')

// app.get('/usuarios', (req, res) => {
//   res.send('Hola usuario')
// })

app.listen(port, () => {
  console.log('Servidor estatico iniciado')
})