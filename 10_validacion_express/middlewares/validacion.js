'use strict'

module.exports = (req, res, next) => {
  if(req.params.id != '44') {
    console.log('error de verb')
    res.send('No se admite nada fuera de numeros')
  } else {
    console.log('Middleware ejecutado')
    next()
  }
}