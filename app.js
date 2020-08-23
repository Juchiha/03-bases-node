const { getTablaMultiplicar, listarTabla } = require('./Multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const color = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(tabla => {
            console.log(tabla);
        }).catch(e => {
            console.log(e);
        })
        break;

    case 'crear':
        getTablaMultiplicar(argv.base, argv.limite).then(archivo => {
            console.log("Archivo creado : ", color.green(archivo));
        }).catch(e => {
            console.log(e);
        })
        break;

    default:
        console.log("comando no reconocido");
}
/* let parametro = argV[2];
; 
getTablaMultiplicar(base).then(archivo => {
    console.log(archivo);
}).catch(e => {
    console.log(e);
})*/