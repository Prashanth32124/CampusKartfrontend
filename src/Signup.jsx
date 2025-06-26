import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CSS/Singup.css';
import backimg from './images/s3.png';
import { useEffect } from 'react';
function Signup() {
  const [email,Setemail]=useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  

  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  const handlesignin=()=>{
    navigate("/login");
  }
  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (username === "" && password === "") {
      alert("Please fill the username and password");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    try {
      const res = await axios.post("https://loud-adaptive-tamarind.glitch.me/signup", {
        username,
        password,
        email, 
      });
  
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };
  
  return (
    
    <div id="Maincontainer">
      <div id="container32124">
        <p id="newh">Welcome to the <b>CampusKart</b> Roy's</p>
        <label className='label2'>Email</label>
        <input className='input2'
          type="text"
          placeholder="Please enter the email"
          value={email}
          onChange={(e) => Setemail(e.target.value)}
        />
        <label className='label'>Username</label>
        <input className='input'
          type="text"
          placeholder="Please enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className='label1'>Password</label>
        <input
          className='input'
          type="password"
          placeholder="Please enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="but1" onClick={handleSignup}>Signup</button>
        <p id="p">already have an account? click signin</p>
        <button className="but1" onClick={handlesignin}>Signin</button>
      </div>
  
   
      <div id="container2246">
        <img src={backimg}/>
        <p id="slogan-text">Your future starts here — let’s make it amazing together.</p>
      </div>
    </div>
  );
  
}

export default Signup;
