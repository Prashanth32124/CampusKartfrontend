import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [imagedata, setImagedata] = useState('');
  const [imagedesc, setImagedesc] = useState('');
  const [imageType, setImageType] = useState('');
  const [message, setMessage] = useState('');
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [clgname,setClgname]=useState();
  const handleclgname=(e)=>{
    setClgname(e.target.value);
  }
  const handleusername=(e)=>{
    setUsername(e.target.value);
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value);
  }
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


    const res = await axios.post('https://rp2backend.vercel.app/AdminDashboard', 
      imagedata,
      imagedesc,
      imageType,
      clgname
    );
    if (res.data?.message) {
    alert(res.data.message); 
  } else {
    alert("Something went wrong!");
  }
  };
  const handleab=async()=>{
    if(username==" " || password==" "){
      alert("please fill the details admin");
    }
    try{
      const res=await axios.post("https://rp2backend.vercel.app/Adminadd",{
        username,
        password
      })
      if(res.data.success){
        alert("new admin added successfully");
      }
      else{
        alert("error ocuured");
      }
    }
    catch{
      alert("error occured");
    }
  }
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
        <label>Collection name</label>
        <input
        type="text"
        value={clgname}
        onChange={handleclgname}/>

        <button type="submit">Upload</button>
      </form>
      <div>
        <h1>Add a admin manually in the db</h1>
        <label>username</label>
        <input
        type="text"
        value={username}
        onChange={handleusername}
        />
        <label>Password</label>
        <input
        type="password"
        value={password}
        onChange={handlepassword}
        />
       <button onClick={handleab}>Add admin</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
