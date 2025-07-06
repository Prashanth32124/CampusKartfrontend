import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Login.css'; // Make sure this points to your original CSS

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

      // Optionally use res.data.token here if backend sends a real token
      localStorage.setItem("token", "yes");

      alert("Login successful!");
      navigate('/Newhomepage');
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-body">
      <h1 className="login-title">WELCOME TO THE LOGIN PAGE</h1>
      <p className="login-subtext">Welcome back</p>

      <div className="login-container">
        <input
          type="text"
          placeholder="Please enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Please enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
