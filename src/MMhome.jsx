import React, { useEffect, useState } from 'react'
import './CSS/MMhome.css';
import axios from 'axios';
function MMhome({loginUsername}) {
  const [images, setImages] = useState([]);
  const [currentIndex, setIndex] = useState(0); 
  const [email,setEmail]=useState();

  useEffect(() => {
    fetch("https://rp2backend.vercel.app/MMhome")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const timer = setTimeout(() => {
        let nextIndex;

        if (currentIndex < images.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }

        setIndex(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, images]);
useEffect(() => {
  const fetchEmail = async () => {
    if (!loginUsername) return;
    try {
      const res = await axios.post("https://rp2backend.vercel.app/MMhomed", {
        username: u
      });
      if (res.data.success) {
        setEmail(res.data.email); 
      }
    } catch (err) {
      console.error("Error fetching email:", err);
    }
  };
  fetchEmail();
}, [loginUsername]);

const u=localStorage.getItem("name");
  return (
    <div>
      <nav className="myNav11">
        <a href="Predict">Predict</a>
        <a href="Homepage">Homepage</a>
      </nav>

      <div id="container">
        {images.length > 0 && (
          <img
            src={`data:image/jpeg;base64,${images[currentIndex].imageData}`}
            alt={`img-${currentIndex}`}
            className="sliderImage"
          />
        )}
      </div>
      <div id="c1">
          <label id="l1">Name:{u}</label><br/>
          <label>Email:{email}</label>
      </div>
    </div>
  );
}

export default MMhome;
