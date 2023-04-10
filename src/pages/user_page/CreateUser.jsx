import React from "react";
import axios from "axios";
// importo axios para hacer peticiones a la base de datos
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// creo URI para acceder a la direccion
let URI = "http://localhost:8000/users";

const CreateUser = () => {
  // creo el navigate para navegar por las rutas
  const navigate = useNavigate();

  // creo los useStates para controlar los input
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // createNewUser es asyncrona y hace la peticion post al servidor
  const createNewUser = async (e) => {
    // hago el preventDefault del evento
    e.preventDefault();
    // cargo los datos en la base de datos como un objeto
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      email: email,
      usuario: usuario,
      password: password,
      type_user: 1,
    });
    // retorno un alerta que se creo el usurario correctamente y lo re dirijo a Login
    alert(
      "El user se creo correctamente, por favor ingrese Usuario y Contarseña"
    );
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-9 ">
          <h1 className="text-center">
            <strong>
              <u> Create User </u>
            </strong>
          </h1>
          <form onSubmit={createNewUser}>
            <div className="mb-3">
              Nombre:
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Apellido:
              <input
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Usuario:
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Password:
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Email:
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="centrador">
              <button type="submit" className="btn btn-primary w-25">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
