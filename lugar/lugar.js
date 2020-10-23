const axios = require('axios');

// se declara como const para evitar que se pise el valor
// pongo async par apoder usar await

const getLugarLatLng = async ( direccion ) => {    
    const encodedUrl = encodeURI(direccion);    

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=4f99ef39bacc34a60c558f350c3fabfc`
    });

    const resp = await instance.get();

    if (resp.data.cod === '404') {
        throw new Error(`No hay resultados para ${direccion}`)
    } else {

        const coord = resp.data.coord;
        const lat = coord.lat;
        const lon = coord.lon;

        return  {
            coord,
            lat,
            lon
        }
    }            
}

module.exports = {
    getLugarLatLng
}






