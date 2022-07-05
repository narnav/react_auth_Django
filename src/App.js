import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import Register from "./Register";
import { Outlet } from "react-router-dom";
function App() {

    return (
        <div className="App">
            <Outlet></Outlet>
            i'm the app
            
        </div>
    );
}
 
export default App;
