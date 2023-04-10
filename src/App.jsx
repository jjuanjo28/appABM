import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

import Nav from "../src/components/nav.jsx";

import Login from "./pages/Login/Login";
import Error from "./pages/error404/Error";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Weather from "./pages/Weather/Weather";
import ShowTasks from "./pages/task_page/ShowTasks"
import CreateTask from "./pages/task_page/CreateTask"
import EditTask from "./pages/task_page/EditTask"
import ShowUsers from "./pages/user_page/ShowUsers";
import CreateUser from "./pages/user_page/CreateUser"
import EditUser from "./pages/user_page/EditUser"

function App() {
  
  const [user, setUser] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (user.length != 0) {
      setLogged(true);
    }
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Nav setLogged={setLogged} setUser={setUser} user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/listaDeUsuarios" element={<ShowUsers user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/createUser" element={<CreateUser />} />

          <Route path="/editUser" element={
           <ProtectedRoute user={user}>
          <EditUser user={user} />
          </ProtectedRoute>
          } />
          
          <Route path="/weather" element={
          <ProtectedRoute user={user}>
          <Weather />
          </ProtectedRoute>
          } />

          <Route
            path="/tasksList"
            element={
              <ProtectedRoute user={user}>
                <ShowTasks user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasksList/createTask"
            element={<CreateTask user={user} />}
          />
          <Route
            path="/tasksList/editTask"
            element={<EditTask user={user} />}
          />
        <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
