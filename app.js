const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(19.350242317729023,-99.1069603238911)
    .then(console.log); */

const getInfo = async(direccion)=>{
    try {
        const ltlng = await lugar.getLugarLatLng(direccion);
        const tmpdt = await clima.getClima(ltlng.lat,ltlng.lng);
        return `El clima de ${direccion} es de ${tmpdt.tmp} ${tmpdt.units}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);



