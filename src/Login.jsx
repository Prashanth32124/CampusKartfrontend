import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleal = () => {
    navigate('/AdminLogin');
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    try {
      const res = await axios.post("https://rp2backend.vercel.app/login", {
        username,
        password,
      });

      localStorage.setItem("token", "yes");
      alert(`Welcome back, ${username}!`);
      navigate('/Predict');
    } catch (err) {
      setError(err.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <h1 id="h1">WELCOME TO THE LOGIN PAGE</h1>
      <p id="newp">Welcome back</p>

      <div id="container1">
        <label className="labelL">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Please enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="labelL1">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Please enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div id="container21240">
          <button id="bt11" onClick={handleLogin}>Login</button>
          <button onClick={handleal}>Admin login</button>
        </div>

        {error && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            {error}
          </p>
        )}

      </div>
    </>
  );
}

export default Login;
