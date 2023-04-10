import React, {useState,useEffect} from 'react';
import SearchCity from './SearchCity';
import ShowCards from './ShowCards';
import axios from 'axios';
// importo axios para hacer las peticiones
import "./Weather.css"
// se importo el ccs
const Weather = () => {
// se crean dos useStates el de ciudad y el de Clima, en este se guardan las ciudades del de city
    const [city, setNewCity] = useState("")
    const [clima, setClima] = useState([])
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
    const capturoCiudad = async ()  =>  {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const guarda = res.data
        // se guarda en setClima con destructuracion y guardando la variable obtenida antes
        setClima((clima) => [...clima, guarda])
    }
   
    useEffect(() => {
        capturoCiudad()
    }, [city])
    //  genero un useEffect de city para el control de la renderizacion
  
    function closeCity(id) {
        setClima((clima) => clima.filter((c) => c.id !== id));
        
    }

    return (
        <div>
        <h1 className='text-center'><strong><u>Wheater Component</u></strong></h1>
        <div className='prueba'>
        <SearchCity setNewCity={setNewCity}/>
        </div>
        <div style={{margin:"10px"}}>
        <ShowCards closeCity={closeCity} clima={clima}/>
        </div>
        </div>
    );
}

export default Weather;
