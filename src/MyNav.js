import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
const MyNav = () => {
  return (
    <div> <Link to="/Login">Login</Link> |{" "}
    <Link to="/Register">Register</Link>|{" "}
    <Link to="/Notes">Notes</Link>
    <Link to="/blabla">error</Link>
    <a href="/blabla">samp</a>
    </div>
  )
}

export default MyNav