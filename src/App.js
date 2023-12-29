// App.js
import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Catagory from './components/Catagory';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setEmojiData, selectEmojiData, store } from './Store';

function App() {

  

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Catagory />} />
        </Routes>
      </Router>
      <div>
      
      
    </div>
    </div>
    
  );
}

export default App;
