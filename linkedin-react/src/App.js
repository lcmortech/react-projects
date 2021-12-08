import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home, About, Events, Contact, Services, CompanyHistory, Location, Whoops404 } from './pages';

function App() {

   
      return ( 
          <Routes>yu
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="services" element={<Services />} />
              <Route path="history" element={<CompanyHistory />} />
              <Route path="location" element={<Location />} />
            </Route>
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Whoops404 />} />
          </Routes>
  );
}

export default App;