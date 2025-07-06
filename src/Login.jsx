import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CSS/Login.css';
import { useEffect } from 'react';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
      document.body.style.overflow = 'hidden'; 
      return () => {
        document.body.style.overflow = 'auto'; 
      };
    }, []);


  const handleLogin = async () => {
  try {
    const res = await axios.post("https://rp2backend.vercel.app/login", {
      username,
      password,
    });

    alert(res.data.message);


    localStorage.setItem("token", "yes"); 

    navigate("/Newhomepage");
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div>
      <h1 id="h1">WELCOME TO THE LOGIN PAGE</h1>
      <p id="newp">Welcome back {username}</p>
    <div  id="container1">
      <label className='labelL'>Username</label>
      <input
        id="input"
        type="text"
        placeholder="Please enter the username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className='labelL1'>Password</label>
      <input
        id="input"
        type="password"
        placeholder="Please enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div id="container21240">
     <button id="bt11" onClick={handleLogin} style={{ display: 'block', backgroundColor: 'red', zIndex: 10 }}>
  Login
</button>

      </div>
    </div>
    </div>
  );
}

export default Login;
