const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async (direccion) => {

    try {
        const infoDelLugar = await lugar.getLugarLatLng(direccion);
        // console.log('Info de lugar', infoDelLugar);
            
        const temp = await clima.getClima(infoDelLugar.lat, infoDelLugar.lon);

        return `El clima de ${direccion} es de ${ temp }.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
    

    // salidas deseadas
    // El clima de XXXX es de XX
    // No se pudo determinar el clima de XXXXX
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)