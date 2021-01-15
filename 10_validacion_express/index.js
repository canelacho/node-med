'use strict'

const express = require('express')
const app = express()
const port = 4000

const validacion = require('./middlewares/validacion')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.verb(ruta, middleware, callback(req, res, next))

app.get('/dashboard', (req, res) => {
    res.json({
      name: 'daniel',
      email: 'hdpldaniel@gmail.com'
    })
})

app.get('/usuario/:id', validacion, (req, res) => {
  console.log(req.method)
  res.send('Hola mundo validando')
})

app.get('/usuario', validacion, (req, res, next) => {
  res.send('Usuarios funcionando')
})

app.listen(port, () => {
  console.log(`Servidor de validacion funcionando en el puerto ${port}`)
})