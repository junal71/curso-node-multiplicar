//const { demandOption, argv, options } = require('yargs');
//const { boolean } = require('yargs');
const colores = require('colors');
const {creararchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();


creararchivo(argv.b, argv.l, argv.h)
    .then(nombrearchivo => console.log(nombrearchivo,'creado'.green))
    .catch(err => console.log(err))
