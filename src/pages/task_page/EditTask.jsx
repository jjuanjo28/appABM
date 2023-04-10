import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditTask.css"
const EditTask = ({ user }) => {
  const taskId = sessionStorage.getItem("key");
  const URI = "http://localhost:8000/users";
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [type, setType] = useState("");
  

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const res = await axios.get(`${URI}/task/${taskId}`);
    setTask(res.data[0]);
  };
  const editTask = async (e) => {
    e.preventDefault();

    if (newTask.length == 0) {
      const data = task.task;
      await axios.put(`${URI}/tasks/${taskId}`, {
        task: data,
      });
    } else {
      await axios.put(`http://localhost:8000/users/tasks/${taskId}`, {
        task: newTask,
      });
    }
    if (type.length == 0) {
      const data = task.type_task;

      await axios.put(`http://localhost:8000/users/tasks/${taskId}`, {
        type_task: data,
      });
    } else {
      await axios.put(`http://localhost:8000/users/tasks/${taskId}`, {
        type_task: type,
      });
    }
    navigate("/tasksList");
  };

  const cambioRadio = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="container">
    <div className="row vh-100 justify-content-center align-items-center">
    <div className="col-sm-9">
      <h1 className="text-center"><strong><u>edit your Task</u></strong></h1>
      <form onSubmit={editTask}>
        <div className="mb-3">
          <h2>Task: </h2>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            className="form-control"
            placeholder={task.task}
          />
        </div>

        <fieldset id="primer">
          <legend>Tipo de Tarea:</legend>

          <div
            style={{
              borderRadius: "15px",
              padding: "15px",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              backgroundColor: "pink",
            }}
          >
            <div>
              <input
                name="p1"
                type="radio"
                id="normal"
                value="1"
                checked={type == 1 ? true : false}
                onChange={cambioRadio}
              />
              <label style={{ padding: "10px" }} htmlFor="normal">
                normal
              </label>
            </div>

            <div>
              <input
                name="p1"
                type="radio"
                id="urgente"
                value="2"
                checked={type == 2 ? true : false}
                onChange={cambioRadio}
              />
              <label style={{ padding: "10px" }} htmlFor="urgente">
                urgente
              </label>
            </div>

            <div>
              <input
                name="p1"
                type="radio"
                id="bloqueada"
                value="3"
                checked={type == 3 ? true : false}
                onChange={cambioRadio}
              />
              <label style={{ padding: "10px" }} htmlFor="bloqueada">
                Bloqueada
              </label>
            </div>
          </div>
        </fieldset>
       <div className="separa">

        <button
          style={{ margin: "20px"}}
          type="submit"
          className="btn btn-primary w-25"
        >
          Edit Task
        </button>
       </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default EditTask;
