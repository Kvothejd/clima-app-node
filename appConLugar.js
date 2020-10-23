const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion 

lugar.getLugarLatLng(argv.direccion)
    .then( console.log );



clima.getClima('-31.41', '-64.18')
    .then( console.log )
    .catch( console.log )

