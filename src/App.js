import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import AddUser from './Components/pages/Users/AddUser';
import EditUsers from './Components/pages/Users/EditUsers';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/users/add' element={<AddUser/>}/>
        <Route  path='/users/edit/:id' element={<EditUsers/>}/>
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
