import React, { useState } from 'react';
import axios from 'axios';
import './CSS/AdminLogin.css';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigate=useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://rp2backend.vercel.app/Admin', {
        username,
        password,
      });

      if (res.data.success) {
        alert('Login successful');
        navigate('/AdminDashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Error logging in');
      console.error(error);
    }
  };

 return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>

      <label>Username</label>
      <input type="text" value={username} onChange={handleUsername} />

      <label>Password</label>
      <input type="password" value={password} onChange={handlePassword} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
