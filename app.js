
const { boolean } = require('yargs');
const { crea } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); 

console.clear();

crea(argv.h, argv.l).then(nombre => console.log(nombre, 'creado'))
    .catch(err => console.log(err));

 





