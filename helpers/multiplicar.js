const colores = require('colors');
const fs = require('fs');

const creararchivo = async(base = 1, listar, hasta) => {

   
    let salida = '';
    let consola = '';
    for(let i = 1; i<=hasta; i++){
        if(i%2 === 0){
        salida += ` ${base} X ${i} = ${base*i}\n`;
        consola += ` ${base} X ${i} = ${base*i}\n`.red;
        } else{
            salida += ` ${base} X ${i} = ${base*i}\n`;
            consola += ` ${base} X ${i} = ${base*i}\n`.blue;
        }  
    }
    if(listar){
        console.log("=========================".rainbow);
        console.log('Esta es la tabla del ',base);
        console.log("=========================".rainbow);
        console.log(consola);
    }
    try{
    const nombrearchivo = await fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    return `tabla-${base}.txt`;
    }
    catch (error){
        throw error;
    }

    
}


module.exports = {
    //creararchivo: creararchivo
    creararchivo
}