import React, { useEffect, useState } from 'react'

function MMhome() {
    const [images,setImages]=useState();
    useEffect(()=>{
        fetch("https://rp2backend.vercel.app/MMhome")
        .then((res)=>res.json())
        .then((data)=>{
            setImages(data);
        })
        .catch((err) => {
        console.error("Error fetching images:", err);
      });
        }, []);
  return (
    <div>
      <nav11>
        <li><a href="Predict">AI Predict</a></li>
        <li><a href="NewHomePage">HomePage</a></li>
      </nav11>
      <div>
        {images}
      </div>
    </div>
  )
}

export default MMhome
