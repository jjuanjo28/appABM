import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./EditUser.css"
// creo la constante URI con los datos del servidor
const URI = "http://localhost:8000/users";

// me importo el user desde App y asi tengo el dato del usuario a editar
const EditUser = ({user}) => {
 // creo el navigate para poder navegar
    const navigate = useNavigate()

  // creo el grupo de useState para poder controlar los input  
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    
 // editUser es Asyncronica y hace la peticion al servidor
    const editUser = async (e) =>{
// tiene un preventDefault
    e.preventDefault()
 
// me guardo en constantes los datos del user que traigo desde app, los uso luego para mostrarlos en
//  los input y si no los cambio, los puedo dejar iguales
    const nombreAnt = user[0].nombre;
    const apellidoAnt = user[0].apellido;
    const emailAnt = user[0].email;

    // si la constante nombre...esta vacia, cargo nuevamente el mismo dato a la base y no lo pierdo
    // este if se repite en los tres campos, en caso que no se cambie nada... queda igual
    // hago algun cambio, tomo el dato de los inputs y los mando como put al servidor
    if(nombre.length == 0){
       await axios.put(`${URI}/${user[0].id}`, {
       nombre: nombreAnt
      });
    } else {
      await axios.put(`${URI}/${user[0].id}`, {
        nombre: nombre
      });
    }
      if(apellido.length == 0){
        await axios.put(`${URI}/${user[0].id}`, {
         apellido: apellidoAnt
       });
     } else {
       await axios.put(`${URI}/${user[0].id}`, {
         apellido: apellido
       });

       if(email.length == 0){
        await axios.put(`${URI}/${user[0].id}`, {
         email: emailAnt
       });
     } else {
       await axios.put(`${URI}/${user[0].id}`, {
         email: email
       }); 
     }   
    }
    // luego de terminar, navego nuevamente a Home
    navigate("/")
 }
   
    return (
      <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-9 ">
            <h1 className='text-center'><strong><u>Edite su Usuario</u></strong></h1>
            <form onSubmit={editUser}>
        <div className="mb-3">
          <h3>Nombre: </h3>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder={user[0].nombre}
          />
        </div>

        <div className="mb-3">
          <h3>Apellido: </h3>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="form-control"
            placeholder={user[0].apellido}
          />
        </div>

        <div className="mb-3">
          <h3>Email: </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            placeholder={user[0].email}
          />
        </div>
       
       <div className='centrador'>
        <button
         type="submit" 
         className="btn btn-primary w-25"
        >
          Edit User
        </button>
       </div>
        </form>
</div>
</div>
        </div>
    );
}

export default EditUser;
