import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home, About, Events, Contact, Whoops404 } from './pages';

function App() {

   
      return ( 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Whoops404 />} />
          </Routes>
  );
}

export default App;