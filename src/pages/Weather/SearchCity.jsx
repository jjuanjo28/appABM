import React, { useState} from "react";
import "./SearchCity.css"
// importo el css de SearchCity
export default function SearchCity({setNewCity}) {
  // me traigo por props setNewCity de Weather
  // creo un useState de la ciudad
  const [city, setCity] = useState("");

 

function createCity(e) {
  // uso un preventDefault
   e.preventDefault()
   // cargo la nueva ciudad en el useState
   setNewCity(city)
    }
 
  return (
    <nav className="navbar">

      <form 
      onSubmit={createCity}
      className="container-fluid" role="search">
     <div className="algo">
        <input
         
          value={city}
          onChange={(e) => setCity(e.target.value) }
          className="form-control w-75"
          type="text"
          placeholder="Ciudad"
          aria-label="Search"
        />
        <button  className="btn btn-outline-success" type="submit" id="boton">
          Ciudad
        </button>
     </div>
      </form>
    </nav>
  );
}
