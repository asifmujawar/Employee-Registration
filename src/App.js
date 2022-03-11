
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { adduser,updateUser } from './features/Users'
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';
import {Route,Routes,BrowserRouter as Router,Link} from 'react-router-dom'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const userList = useSelector((state)=>state.users.value)
  const dispatch = useDispatch();
  const [name,setName] = useState();
  const [id,setId] = useState();
  const [username,setUsername] = useState();
  const [updateusername,setUpdateusername] = useState();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
