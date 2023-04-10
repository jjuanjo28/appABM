import React from "react";
import { useNavigate } from "react-router-dom";
// se importa el useNavigate para navegar entre las rutas

const Nav = ({ setLogged, setUser, user }) => {
  const navigate = useNavigate();
  // se genera el navigate
  var type_user = "1";
  // se carga el tipo de usuario en una variable con 1
  if (user.length > 0) {
    // si el user que venia, estaba cargado con algun dato.... guardaba en el type_user
    type_user = user[0].type_user;
  }
  // se renderiza condicionalmente un div, que navega a la lista de usuarios, si se es administrador
  // caso contrario.. la parte de menu esa, no existe

  // la tabla de navegacion esta armada con botones de login y logoff
  // tiene una lista con links de navegacion
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {type_user == 0 ? (
            <div
              className="navbar-brand"
              href="/tasks"
              onClick={() => navigate("/listaDeUsuarios")}
            >
              Listado de Usuarios
            </div>
          ) : null}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={() => navigate("/curriculum")}
                >
                 <strong>CURRICULUM</strong>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => navigate("/editUser")}>
                  User Edit
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => navigate("/tasksList")}
                >
                  Tasks List
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => navigate("/weather")}
                >
                  Weather App
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <h3>
                <span
                  className="badge bg-primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </h3>
              <h3 style={{ marginLeft: "10px" }}>
                <span
                  className="badge bg-primary"
                  onClick={() => {
                    setLogged(false), setUser([]), navigate("/");
                  }}
                >
                  Loggout
                </span>
              </h3>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
