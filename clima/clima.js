const axios = require('axios');

const getClima = async (lat, lng) => {
    //const resp = axios.get(`api.openweathermap.org/data/2.5/weather?q=London&appid=537293dd9d4d79cb9551557011b1c311`);

    const instance = axios.create({
        baseURL: 'https://api.climacell.co/v3/weather/realtime',
        headers: {'apikey':'Pb8i2lw4Pny84dmOxxPS8VM8iWgrc3AG'},
        params: {'lat': `${lat}`,'lon':`${lng}`,'fields':'temp'}
    })

    const resp = await instance.get();
    if(resp.data.length === 0){
        throw new Error(`No hay resultados para ${lat},${lng}`)
    }

    const data = resp.data;
    const tmp = data.temp.value;
    const units = data.temp.units;
    //const units = data.units;

    return {
        tmp,
        units
    }
}


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

module.exports = {
    getClima
}