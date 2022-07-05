import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import Notes from './Notes';
import Register from './Register';
import Login from './Login';
import MyNav from './MyNav';
import AddNote from './AddNote';
import DelNote from './DelNote';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Link to="/Login">Login</Link> |{" "}
            <Link to="/Register">Register</Link>|{" "}
            <Link to="/Notes">Notes</Link>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="Notes" element={<Notes />} >
                        <Route path="add" element={<AddNote />} />
                        <Route path="del" element={<DelNote />} />
                    </Route>
                    <Route path="Register" element={<Register />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="*" element={<h1>Go search (404)</h1>} />

                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
