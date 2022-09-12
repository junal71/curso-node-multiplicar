const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base es en numero al que se le calcula la tabla'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'decide si se lista o no en pantalla el resultado'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Determina hasta que numero se hace la table'
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.base)){
                            throw 'La base debe ser un numero'
                        }
                        if(isNaN(argv.hasta)){
                            throw 'EL valor limite debe ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;