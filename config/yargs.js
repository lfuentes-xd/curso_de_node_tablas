const { number } = require('yargs');

const argv = require('yargs')
    .option('h',{
        alias: 'hasta', 
        type: 'number',
        demandOption: true, 
    })
    .check((argv, option) =>{
        if (isNaN(argv.h)) {
            throw 'el otro numero debe ser un numero xd'
        }else{
            return true; 
        }
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
    })
    
    .argv;

    module.exports = argv; 