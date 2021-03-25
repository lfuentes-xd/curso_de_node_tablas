
//esta funcion va a resivir como parametro la base 

const { rejects } = require('assert');
const fs = require('fs'); 
const { resolve } = require('path');

const crea = (hasta=5, listar=false) =>{
    //creamos una promesa 
    return new Promise ((resolve, reject) =>{
        let guardar = '';
        for(let a=1; a<=hasta; a++){
            for (let i = 1; i < 11; i++) {
                guardar += `${a} x  ${i} = ${a * i} \n`;
            }
        }
        if(listar){
            console.log(guardar);
        }
        //aqui generamos el .txt 
        fs.writeFileSync('./salida/ tablas de multiplicar', guardar, (err) => {
            if (err) {
                throw err;
            } else {
                resolve('archivo creado!');
            }
        })
    });
}

// lo que esta dentro de esta clase es privado... por lo que necesitamos exportarlo 

module.exports = {
    crea 
}
