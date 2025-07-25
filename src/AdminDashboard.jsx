import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [imagedata, setImagedata] = useState('');
  const [imagedesc, setImagedesc] = useState('');
  const [imageType, setImageType] = useState('');
  const [message, setMessage] = useState('');
  const handleimgdata = (e) => {
    setImagedata(e.target.value);
  };

  const handleimgdesc = (e) => {
    setImagedesc(e.target.value);
  };

  const handleimageType = (e) => {
    setImageType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      imageData: imagedata,
      imageDescription: imagedesc,
      imageType: imageType,
    };

    const res = await axios.post('https://rp2backend.vercel.app/AdminDashboard', payload);
    if (res.data?.message) {
    alert(res.data.message); 
  } else {
    alert("Something went wrong!");
  }
  };

  return (
    <div>
      <h2>Upload Image (Base64)</h2>
      <form onSubmit={handleSubmit}>
        <label>Image Data (Base64 URL only)</label><br />
        <textarea
          value={imagedata}
          onChange={handleimgdata}
          rows="10"
          cols="60"
          placeholder="Paste base64 string here"
          required
        /><br /><br />

        <label>Image Description</label><br />
        <input
          type="text"
          value={imagedesc}
          onChange={handleimgdesc}
          placeholder="Enter image description"
          required
        /><br /><br />

        <label>Image Type</label><br />
        <input
          type="text"
          value={imageType}
          onChange={handleimageType}
          placeholder="e.g., college, logo"
          required
        /><br /><br />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
