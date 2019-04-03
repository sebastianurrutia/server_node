'use strict'
var fs = require('fs'),
    readString = fs.createReadStream('assets/nombres.txt'),
    writeStream = fs.createWriteStream('assets/nombres_copy.txt')

readString.pipe(writeStream)

readString.on('data', function(chunk){
    console.log(
        'He leido: ',
        chunk.length,
        'caracteres'
    )
})
    
readString.on('end', function (){
    console.log('Fin de la lectura del archivo')
})

