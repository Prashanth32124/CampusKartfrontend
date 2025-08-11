import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Vitupload.css';

function Vitupload() {
  const [data, setData] = useState('');
  const [img,setImages]=useState('');
  useEffect(() => {
    axios.get("http://localhost:5000/vitupload")
      .then(res => {
        if (res.data.description) {
          setData(res.data.description);
          setImages(res.data.imagedata);
        }
      })
      .catch(err => console.error("Error fetching description:", err));
  }, []); 
  return (
    <div>
      <textarea 
        id="desc" 
        placeholder="The college description will appear here" 
        readOnly
        value={data}
      ></textarea>
      <div id="continerofimg">
        {img && (
          <img 
            src={`data:image/jpeg;base64,${img}`} 
            alt="College"
            style={{ width: "300px", height: "auto" }}
          />
        )}
      </div>
    </div>
  );
}

export default Vitupload;
