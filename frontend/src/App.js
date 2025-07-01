import './App.css';
import Home from './Components/Home/Home';
import React from 'react';
import {Route, Routes} from 'react-router';
import Nav from './Components/Nav/Nav';
import Users from './Components/UserDetails/Users';
import AddUser from './Components/AddUser/AddUser';

function App() {
  return (
    <div>
      <Home />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
        </Routes>

      </React.Fragment>
    </div>
  );
}

export default App;
