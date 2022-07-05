import axios from 'axios';
import React, { useState } from "react";
const Register = () => {

    const [userName, setuserName] = useState("")
    const [pwd, setpwd] = useState("")
    const [email, setemail] = useState("")
    const registerFunc = () => {
        
       


        axios.post("http://127.0.0.1:8000/adduser/",{
                username: userName,
                email: email,
                password: pwd,
                staff: false
        })
      };

  return (
    <div>
        <h1>Register/signup</h1>
        User<input value={userName} onChange={(e)=>setuserName(e.target.value)}></input><br/>
        Email<input value={email} onChange={(e)=>setemail(e.target.value)}></input><br/>
        password<input value={pwd} onChange={(e)=>setpwd(e.target.value)} type={'password'}></input><br/>
        <button onClick={()=>registerFunc()}>Register</button><hr/>
    </div>
  )
}

export default Register