import React, { useEffect, useState } from 'react';
import './CSS/MMhome.css';
import axios from 'axios';
import profile from '../src/images/p.png';

function MMhome() {
  const [images, setImages] = useState([]);
  const [currentIndex, setIndex] = useState(0); 
  const [email, setEmail] = useState();
  const u = sessionStorage.getItem("name");

 
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) { 
      window.location.href = "Predict.js"; 
    }
  }, []);

  useEffect(() => {
    fetch("https://rp2backend.vercel.app/MMhome")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, images]);

  useEffect(() => {
    const fetchEmail = async () => {
      if (!u) return;
      try {
        const res = await axios.post("https://rp2backend.vercel.app/MMhomed", { username: u });
        if (res.data.success) setEmail(res.data.email);
      } catch (err) {
        console.error("Error fetching email:", err);
      }
    };
    fetchEmail();
  }, [u]);

  return (
    <div>
      <nav className="myNav11">
        <a href="Predict">Predict</a>
        <a href="NewHomepage">Homepage</a>
        <img id="p" src={profile}/>
        <label>{u}</label>
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
        <label id="l1">Name: {u}</label><br/>
        <label id="l2">Email: {email}</label>
      </div>
      <div id="imgg"></div>
    </div>
  );
}

export default MMhome;
