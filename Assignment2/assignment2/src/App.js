import "./App.css";
import logo from "./cart2.png";
import React, { useState } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";
import { Routes, Route } from "react-router-dom";
//import {Button} from "react-bootstrap-dom";
import { Home } from "./Home";
import { Cart } from "./Cart";

export const App = () => {
  return (
    <div className="flex fixed flex-row">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}; //end App
