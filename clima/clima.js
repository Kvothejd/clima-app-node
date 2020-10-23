const axios = require('axios');

// se declara como const para evitar que se pise el valor
// pongo async par apoder usar await
const getClima = async ( lat, lon ) => {
    const encodedLat = encodeURI(lat);
    const encodedLon = encodeURI(lon);

    // const instance = axios.create({
    //     baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f99ef39bacc34a60c558f350c3fabfc&units=metric`
    // });

    // const resp = await instance.get();
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${encodedLat}&lon=${encodedLon}&appid=4f99ef39bacc34a60c558f350c3fabfc&units=metric`);
    
    return resp.data.main.temp;

    // if (resp.data.cod === '404') {
    //     throw new Error(`No hay resultados para Lat:${lat} Lon:${lon}`);
    // } else {
    //     return resp.data.main.temp;
    // }
}

module.exports = {
    getClima
}






