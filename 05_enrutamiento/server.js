'use strict'

const http = require('http')
const port = 4000

const server = http.createServer( (req, res) => {
  console.log("Ruta llamada: ", req.url)
  if((req.url == '/contactos')) {
    res.writeHead(201, {'Content-Type': 'text/plain'})
    res.write('Peticion recibida en el servidor : ' + req.url + '\n\n')
    res.end('Enviados a CONTACTOS')
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('Peticion recibida en el servidor : ' + req.url + '\n\n')
    res.end('404 NO ENCONTRADO')
  }
})

server.listen(port)
console.log('Servidor inicializado')