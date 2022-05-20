const fs = require('fs')
const path = require('path')

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err


    console.log('folder created...')
});


//create and write to file

fs.writeFile(path.join(__dirname, 'hello.txt'), 'hello world!', function(err){
    if(err) throw err


    console.log('file written to')
});