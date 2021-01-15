'use strict'

const express = require('express')
const app = express()
const port = 4000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/usuario/:id', (req, res, next) => {
  console.log('req.params: ', req.params)
  console.log('req.query: ', req.query)
  res.send('Servidor con express corriendo')
})

app.post('/usuario', (req, res, next) => {
  console.log(req.body)
  res.send('Servidor respondiendo el POST')
})

// app.post('/usuario', (req, res, next) => {
  // const body = []
  // req.on('data', (chunk) => {
  //   console.log(chunk)
  //   body.push(chunk)
  // })
  // req.on('end', () => {
  //   const parsedBody =Buffer.concat(body).toString()
  //   const msg = parsedBody.split('=')[1]
  //   console.log(parsedBody)
  //   console.log(msg)
  // })

  // console.log(body)
//   res.send('Servidor respondiendo el POST')
// })

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port} de mi maquina local`)
})