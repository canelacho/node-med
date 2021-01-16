'use strict'

const express = require('express')
const app = express()
const port = 4000


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/libros/:id', (req, res) => {
  console.log(req)
  console.log("Query: ", req.query)
  console.log("Parametro: ", req.params)
  res.send('Hola mundo!')
})

app.post('/usuarios', (req, res) => {
  console.log(req.body)
  const respuesta = req.body
  respuesta.aprobado = true
  res.json({
    status: 'ok',
    msg: 'procesado' 

  })
})


app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ', port)
})