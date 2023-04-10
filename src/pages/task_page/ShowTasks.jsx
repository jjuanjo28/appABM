import React from "react";
import axios from "axios";
// se importa axios para hacer las peticiones al servidor

import "./ShowTasks.css"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// crea URI con los datos donde se hara la peticion
const URI = "http://localhost:8000/users";

const ShowTasks = ({ user }) => {
  // importo el user de App
  // creo el setState de Task
  const [tasks, setTasks] = useState([]);
  // guardo un estilo en textoTachado
  const textoTachado = { textDecoration: "line-through", color:"gray" };
  useEffect(() => {
    getTasks();
  }, []);
  // uso el useEffect con getTasks, haciendo la peticion de las tareas
  const navigate = useNavigate();
  // genero el navigate para  navegar en las direcciones
// getTasks pide al servior las tareas de un usuario determinado por user.id y despues las carga en el useState que habiamos creado antes
  const getTasks = async () => {
    const res = await axios.get(`${URI}/tasks/${user[0].id}`);
    setTasks(res.data);
  };
  // deleteTask borra con una peticion la task que se le pase y llama a getTasks para mostarlas nuevamente
  const deleteTask = async (task) => {
    await axios.delete(`${URI}/tasks/${task.id}`);
    getTasks();
  };

  // cambia el estado de la tarea que se le pasa por props, si es 1 la pasa a 0 y viceversa
  const changeState = async (task) => {
    if (task.state == 1) {
      const res = await axios.put(`${URI}/tasks/${task.id}&${user[0].id}`, {
        state: 0,
      });
      getTasks(res);
    } else {
      const res = await axios.put(`${URI}/tasks/${task.id}&${user[0].id}`, {
        state: 1,
      });
      getTasks(res);
    }
  };

  // gardaLocalStorage, se encarga de guardar en alguna varible el numero de la task
  // la imposiblidad de enviar el dato a otro estado, se paso por sessionStorage, para 
  // encontrala desde cualquier lado, y la misma se borra cuando se termina la sesion.
  const guardaLocalStorage = (task) =>{
    sessionStorage.setItem("key", task.id);
    navigate("/tasksList/editTask")
  }

  return (
    <div>
    <div className="primero">
      <h1><strong><u>Tasks List</u></strong></h1>
      <button
        onClick={() => {
          navigate("/tasksList/createTask");
        }}
        style={{ margin: "10px" }}
        className="btn btn-primary w-25"
      >
        Create Task
      </button>
    </div>
      <div className="container">
      <div className="row justify-content-center">
      <div className="table table-bordered mx auto d-block">
      <table className="table" style={{border:"solid 2px"}}>
        <thead className="table-primary" style={{border:"solid 2px"}}>
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Estado</th>
            <th scope="col">tipo</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} style={{backgroundColor:"white"}}>
              <td style={task.state == 1 ? textoTachado : null}><h2>{task.task}</h2></td>
              <td>
                {task.state == 0 ? (
                  <i
                    style={{ color: "red", fontSize:"1.5rem" }}
                    className="fi fi-rr-clock-three"
                    onClick={() => changeState(task)}
                  >{" "}
                
                       Pendiente
                  </i>
                ) : (
                  <i
                    onClick={() => changeState(task)}
                    style={{ color: "green" , fontSize:"1.5rem"}}
                    className="fi fi-rr-time-check"
                  >
                    {" "}
                    Completa
                  </i>
                )}
              </td>
              <td>{task.type_task == 1 ?<i className="bi bi-envelope" style={{color:"blue", fontSize:"1.5rem"}}>  Normal</i>:null}
                  {task.type_task == 2 ? <i className="bi bi-envelope-exclamation" style={{color:"red", fontSize:"1.5rem"}}>   Urgente</i>:null}
                  {task.type_task == 3 ? <i className="bi bi-envelope-slash"style={{color:"black", fontSize:"1.5rem"}} >   Blocking</i>:null}
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task)}
                >
                 <i class="bi bi-trash"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary "
                  onClick={() => guardaLocalStorage(task)}
                >
                  Edit Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ShowTasks;
