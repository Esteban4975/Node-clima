const axios = require('axios');

/* const getLugarLatLng = async (direccion) =>{
    const encodedurl = encodeURI(direccion);
    console.log(encodedurl);

    const instance = axios.create({
        baseURL: 'https://api.climacell.co/v3/weather/realtime',
        headers: {'apikey':'Pb8i2lw4Pny84dmOxxPS8VM8iWgrc3AG'},
        params: {'lat': '19.350242317729023','lon':'-99.1069603238911','fields':'temp'}
    })

    const resp = await instance.get();
    if(resp.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data;
    const lat = data.lat;
    const lng = data.lon;
    const tmp = data.temp;
    const units = data.units;

    return {
        direccion,
        lat,
        lng
    }
} */

const getLugarLatLng = async(direccion) => {
    //const encodedurl = encodeURI(direccion);
    //console.log(encodedurl);

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {'q' : `${direccion}`,'appid': 'ea00728ab11d4a254e6964d7d6614106'}
    })

    const resp = await instance.get();
    if(resp.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`)
    }

    //console.log(resp.data);
    const data = resp.data;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return{
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}