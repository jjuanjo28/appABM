import React from "react";
import "./CardCity.css"
export default function CardCity({ max, min, img, temp, name, closeCity }) {
// se traen datos por props
// el boton tiene un onClick que llama a closeCity y se puede cerrar
  return (
        <div className="card" id="algo" >
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        className="card-img-top"
        alt="Imagen no encontrada"
      />
      <div className="card-body">
        <h5 className="card-title">ciudad: <h2><strong>{name}</strong></h2></h5>
        <h4>Temperatura: {temp}</h4>
        <div className="ordenador">

        <div className="aling-items-center">
        <h5>min: {min}</h5>
        <h5>max: {max} </h5>
        </div>
        <button onClick={closeCity} className="btn btn-danger w-50 h-25">Close</button>
        </div>
      </div>
    </div>
   
  );
}
