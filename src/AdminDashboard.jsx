import React, { useState } from 'react';
import axios from 'axios';
import './CSS/AdminDashboard.css';
function AdminDashboard() {
  const [imagedata, setImagedata] = useState('');
  const [imagedesc, setImagedesc] = useState('');
  const [imageType, setImageType] = useState('');
  const [clgname, setClgname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!imagedata || !imagedesc || !imageType || !clgname) {
      alert("Please fill all image fields");
      return;
    }

    const payload = {
  imageData: imagedata,
  imageDes: imagedesc,
  imageType: imageType,
  clgname: clgname
};


    try {
      const res = await axios.post('https://rp2backend.vercel.app/AdminDashboard', payload);
      if (res.data?.message) {
        alert(res.data.message);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Upload failed!");
      console.error(error);
    }
  };

  const handleab = async () => {
    if (!username || !password || username.trim() === "" || password.trim() === "") {
      alert("Please fill the admin details");
      return;
    }

    try {
      const res = await axios.post("https://rp2backend.vercel.app/Adminadd", {
        username,
        password
      });
      if (res.data.success) {
        alert("New admin added successfully");
      } else {
        alert("Error occurred");
      }
    } catch (err) {
      alert("Server error occurred");
      console.error(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Upload Image (Base64)</h2>

      <label>Image Data (Base64 URL only)</label><br />
      <textarea
        value={imagedata}
        onChange={(e) => setImagedata(e.target.value)}
        rows="10"
        cols="60"
        placeholder="Paste base64 string here"
      /><br /><br />

      <label>Image Description</label><br />
      <input
        type="text"
        value={imagedesc}
        onChange={(e) => setImagedesc(e.target.value)}
        placeholder="Enter image description"
      /><br /><br />

      <label>Image Type</label><br />
      <input
        type="text"
        value={imageType}
        onChange={(e) => setImageType(e.target.value)}
        placeholder="e.g., college, logo"
      /><br /><br />

      <label>Collection Name</label><br />
      <input
        type="text"
        value={clgname}
        onChange={(e) => setClgname(e.target.value)}
        placeholder="e.g., klimages, admins"
      /><br /><br />

      <button onClick={handleSubmit}>Upload</button>

      <div style={{ marginTop: "50px" }}>
        <h2>Add an Admin Manually</h2>

        <label>Username</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <label>Password</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button onClick={handleab}>Add Admin</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
