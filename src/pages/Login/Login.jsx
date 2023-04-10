import React from "react";
// importo axios para hacer las peticiones a la base de datos
import axios from "axios";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// creo la URI para tener acceso a mi base de usuarios
let URI = "http://localhost:8000/users";

// importo setUser de App que se usa para poder cargar el usuario
const Login = ({ setUser }) => {
  // creo mi navigate para navegar entre las paginas
  const navigate = useNavigate();

  // con getUsers capturo asyncronicamente de la base de datos el  el usuario que estoy pidiendo
  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  };

  // creo grupo de useStates para poder controlar los inputs
  const [users, setUsers] = useState([]);
  const [userLogged, setUserLogged] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // creo el useEffect y cargo una vez getUsers
  useEffect(() => {
    getUsers();
  }, []);

  const store = (e) => {
    // uso el preventDefault para el input
    e.preventDefault();
    const username = userName;
    const pass = password;
    // verifico si existe el user en la base
    if (users.some((user) => user.usuario == username)) {
      const test = users.filter(
        // cuando existe el user y el password es igual al de la base, accedo al if
        (user) => user.usuario == username && user.password == pass
      );
      // si el password es igual una vez que ya tenia el dato del nombre del user.... cargo en setUser y envio a App para que funcione en general

      if (test.some((user) => user.password == pass)) {
        setUserLogged(test);
        setUser(test);
        // mando a navegar a Home
        navigate("/");
      } else {
        // me da el error de password incorrecto
        alert("el password ingresado no es el correcto");
      }
    } else {
      // me da el error que el user no existe y me envia a navegar al creador de usuario
      alert("El User que ingreso no Existe");
      navigate("/createUser");
    }
  };

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-9 ">
          <h1 className="text-center">
            <strong><u>
            Login Page
            </u></strong>
          </h1>

          <form onSubmit={store}>
            <div className="mb-3 row">
              <lavel>
                UserName:
                <input
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control "
                />
              </lavel>
            </div>
            <div className="mb-5">
              <label>Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="separa">
              <button type="submit" className="btn btn-primary w-25">
                Login User
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="btn btn-primary w-25"
                onClick={() => navigate("/createUser")}
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
