'use strict'

// const fs = require('fs')

// fs.readFile('file.txt', function(err, data) {
//   if(err) console.error(err)
//   console.log(data.toString())
// })

// fs.writeFile('test.txt', 'Hola mundo nodejs', function(err) {
//   if(err) console.error(err)
//   else console.log('Operacion de escritura fue completada.')
// })

// fs.appendFile('test.txt', 'Linea nueva append', function(err) {
//   if(err) console.error(err)
//   else console.log('Append completado')
// })

// fs.unlink('test.txt', function() {
//   console.log('archivo eliminado')
// })


const os = require('os')

// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.uptime())

