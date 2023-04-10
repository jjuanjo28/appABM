import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateTask = ({user}) => {
    const navigate= useNavigate()
    
    const [newTask, setNewTask] = useState("")
    const [type, setType] = useState("")
    
    const createTask = async (e) =>{
        e.preventDefault()
        if(!newTask || !type){
          alert("No se creo la nueva tarea!!!!!")
         } else {
          await axios.post(`http://localhost:8000/users/tasks/${user[0].id}`, {state:0, task:newTask ,type_task:type, id_user:user[0].id})
          alert("La Task se creo correctamente")
        }  navigate("/tasksList")
      }
      const cambioRadio = (e) =>{
        setType(e.target.value)
      }
     
       return (
        <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-9">
            <h1 className='text-center'><strong><u>
            create new task
            </u></strong></h1>
            <form onSubmit={createTask}>
           <div className="mb-3">
           <h2>Task: </h2>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            className="form-control"
            />
        </div>
      

        <fieldset >
    <legend>Tipo de Tarea:</legend>
<div style={{borderRadius:"15px", padding:"15px", display:"flex", justifyContent:"space-around", flexDirection:"row", backgroundColor:"pink"}}>

    <div>
      <input type="radio" id="normal"  value="1" checked={type == 1 ? true : false} onChange={cambioRadio}/>
      <label style={{padding:"10px"}} htmlFor="normal">normal</label>
    </div>

    <div>
      <input type="radio" id="urgente" value="2"  checked={type == 2 ? true : false} onChange={cambioRadio}/>
      <label style={{padding:"10px"}}  htmlFor="urgente">urgente</label>
    </div>

    <div>
      <input type="radio" id="bloqueada" value="3"  checked={type == 3 ? true : false} onChange={cambioRadio}/>
      <label style={{padding:"10px"}} htmlFor="bloqueada">Bloqueada</label>
    </div>
</div>
   
</fieldset>
        <div className='separa'>

        <button style={{margin:"20px"}} type="submit" className="btn btn-primary w-25">Create Task</button>
        </div>
       </form>
         </div>
         </div>
         </div>
    );
}

export default CreateTask;
