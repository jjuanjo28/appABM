import React from "react";
import axios from "axios";
// se importa axios para las peticiones
import { useState, useEffect } from "react";

// se crea URI para acceder a la base de datos
const URI = "http://localhost:8000/users";

const ShowUsers = ({ user }) => {
  // traigo el user de App
// me creo el estado users que es un array
const [users, setUsers] = useState([]);
  
// llamo a useEffect con getUsers() una vez, asi capturo todos los user
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  };
  // funcion de borrado de user que  solo se puede usar si se es Admin 
  // esta armada con el 0 que es el type de prioridad admin
  const deleteUser = async (user) => {
    if (user.type_user == 0) {
      alert("no puedes eleminar al Administrador");
    }
    await axios.delete(`${URI}/${user.id}`);
    getUsers();
  };

  return (
    <div style={{border:"solid 2px",backgroundColor:"white"}} >
      <table className="table">
        <thead className="table-primary">
          <tr >
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">email</th>
            <th scope="col">User</th>
            <th scope="col">password</th>
            <th scope="col">type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{backgroundColor:"white"}}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.usuario}</td>
              <td>{user.password}</td>
              <td>{user.type_user}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete user
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
