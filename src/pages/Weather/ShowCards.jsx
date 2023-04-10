import React from 'react';
import CardCity from './CardCity';
import "./ShowCards.css"
// importo el css de ShowCards

const ShowCards = ({clima, closeCity}) => {
// traigo por props clima y closeCity desde wheather
// se hace el mapeo del array para mostrar todas las Cards y se traen datos varios por props  
    
    return (
        <div className='show-cards'>
            
            {clima?.map(clima =>(
                <CardCity
                key={clima.id}
                max={clima.main.temp_max+"°"}
                min={clima.main.temp_min+"°"}
                name={clima.name}
                img={clima.weather[0].icon}
                temp={clima.main.temp+"°"}
                closeCity={()=> closeCity(clima.id)}
                id={clima.id}
                />
            ))}

            
        </div>
    );
}

export default ShowCards;
