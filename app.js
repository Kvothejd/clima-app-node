const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);
const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=4f99ef39bacc34a60c558f350c3fabfc`
  });


instance.get()
    .then( resp => {
        // console.log(resp.data);
        console.log(resp.data.coord);
        console.log(resp.data.weather);
    })
    .catch( err => {
        console.log('Error ', err);
    });


