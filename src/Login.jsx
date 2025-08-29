import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!username || !password) {
      setError("Username and password cannot be empty");
      return;
    }

    try {
      const res = await axios.post("https://rp2backend.vercel.app/login", {
        username: username.trim(),
        password: password.trim(),
      });

     if (res.data.success) {
      sessionStorage.clear();
sessionStorage.setItem("name", username);
  sessionStorage.setItem("token", "yes");
  alert(res.data.message);
  navigate("/MMhome");  
} else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Server error occurred");
        console.log("Backend response error:", err.response.data);
      } else {
        setError("Network error or server not reachable");
        console.log("Network error:", err);
      }
    }
  };

  const handleAdmin = () => navigate("/AdminLogin");

  return (
    <>
      <h1 id="h1">WELCOME TO THE LOGIN PAGE</h1>
      <p id="newp">Welcome back</p>

      <div id="container1">
        <label className="labelL">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="labelL1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div id="container21240">
          <button id="bt11" onClick={handleLogin}>
            Login
          </button>
          <button onClick={handleAdmin}>Admin login</button>
        </div>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </div>
    </>
  );
}

export default Login;
