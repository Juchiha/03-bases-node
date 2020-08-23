const fs = require('fs');
const color = require('colors');

let listarTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} No es un numero`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} No es un numero`);
    }
    console.log('======================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('======================='.green);
    let datos = '';
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base*i}\n`;
    }
    return datos;
}


let getTablaMultiplicar = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} No es un numero`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} No es un numero`);
    }

    let datos = '';
    let nombreArchivo = `tablas/tabla-${base}-${limite}.txt`;
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(nombreArchivo, datos, (err) => {
        if (err) throw err;
    });

    return nombreArchivo;
}


module.exports = {
    getTablaMultiplicar,
    listarTabla
}