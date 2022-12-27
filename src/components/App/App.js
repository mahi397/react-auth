import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

function App() {

  const [token, setToken] = useState(); //set return values of useState to
                                        // token and setToken

  if(!token) { //if token is falsy (i.e., not set), display Login comp.
    return <Login setToken={setToken} />  //Pass setToken function to Login comp.
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <BrowserRouter>
        <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
