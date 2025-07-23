import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from './Home'
import Bhagat from "./Bhagat";
import Lakshmi from "./Lakshmi";


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bhagat-sing" element={<Bhagat/>}/>
      <Route path="/lakshmi-bai" element={<Lakshmi/>}/>
    
    </Routes>
    </BrowserRouter>
  );
};

export default Router;