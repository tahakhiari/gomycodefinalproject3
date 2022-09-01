//import logo from './logo.svg';
//import ListGroup from 'react-bootstrap/ListGroup';
//import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Main from "./components/Main";
import Login from "./components/Login";
import Register from './components/Register';
import Showproducts from './components/products/Showproducts';
import { useEffect, useState } from 'react';


function App() {



  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/showproducts' element={<Showproducts />} />
        </Routes>

      </Router>

    </div>

  );
}

export default App;

