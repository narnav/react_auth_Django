import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
const Notes = () => {
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        let aTok = JSON.parse(localStorage.getItem("authTokens")).access;
        console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/notes/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
        });
        let data = await response.json();

        if (response.status === 200) {
            setNotes(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
    };
    return (
        <div>
            <Link to="/notes/add">Add Note</Link> {" "}
            <Link to="/notes/del">del Note</Link>
            <hr></hr>
            <h1>Notes</h1>
            <button onClick={() => getNotes()}>Notes</button>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul>
            <Outlet></Outlet>
            </div>
    )
}

export default Notes