'use strict'

const express = require('express')
const app = express()
const port = 4000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const personajes = []

app.get('/', (req, res) => {
  res.send(personajes)
})

app.get('/usuario/:id', (req, res) => {
  const id = req.params.id
  const index = personajes.findIndex( item => item.id == id)
  if(index >= 0) {
    res.send(personajes[index])
  } else {
    res.send('Personaje no encontrado')
  }

  res.send(personajes[req.params.id])
})

app.post('/', (req, res) => {
  personajes.push(req.body)
  res.send('POST OK')
})

app.put('/', (req, res) => {
  const id = req.body.id
  const index = personajes.findIndex( item => item.id == id)
  if(index >= 0) {
    personajes[index].name = req.body.name
    personajes[index].group = req.body.group
    res.send('UPDATE OK')
  } else {
    res.send('UPDATE FAIL')
  }
})

app.delete('/', (req, res) => {
  const id = req.body.id
  const index = personajes.findIndex( item => item.id == id)
  if(index >=0){
    personajes.splice(index, 1)
    res.send({
      verb: 'DELETE',
      status: 'OK'
    })
  } else {
    res.send({
      verb: 'DELETE',
      status: 'FAIL'
    })
  }
})


app.listen(port, () => {
  console.log('Servidor CRUD corriendo')
})