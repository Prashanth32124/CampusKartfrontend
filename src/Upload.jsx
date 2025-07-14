import React, { useEffect, useState } from 'react'
import './CSS/Upload.css';
function Upload() {
    const [images,setImages]=useState([]);
    const[index,setIndex]=useState(0);
    
      const totalcountofimages=images.length;
    
    useEffect(()=>{
       fetch('https://rp2backend.vercel.app/klimages')
       .then(res=>res.json())
       .then(data=>setImages(data))
       .catch(err=>console.log(err));
    },[]);

    if (images.length === 0) {
        return <p>Loading data please wait</p>;
      }
    const left=()=>{
      if(index<=0){
        setIndex(images.length-1);
      }
      else{
        setIndex(index-1);
      }
    }
    const right=()=>{
      if(index>=images.length-1){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }
  return (
  <div>
    <nav>
    <ul>
      <li><a href="Klinfo">Clickhere[to know more info]</a></li>
      <li><a href="details">What things have to take for admission</a></li>
      <li><a href="upload"></a></li>
      <li><a href="Newhomepage">Back to colleges page</a></li>
    </ul>
  </nav>
      <p>Welcome to Koneru Lakshmaiah University — where innovation meets tradition.
      Explore the vibrant campus through our curated gallery showcasing the architectural brilliance and world-class facilities that define KLU.
      College Images Our campus features state-of-the-art infrastructure designed to foster academic excellence and holistic growth. The main college building stands as a symbol of our commitment to quality education, combining modern architecture with functional spaces.
      The university library is a treasure trove of knowledge, equipped with extensive resources and digital access to support research and learning.
      Our advanced laboratories provide students hands-on experience with cutting-edge technology, nurturing innovation across disciplines.
      Playgrounds and Sports Facilities At KLU, we believe in balancing academics with physical well-being. Our expansive playgrounds and sports complexes encourage students to pursue excellence beyond the classroom.
      From well-maintained basketball courts to multi-purpose fields, our facilities cater to a wide range of sports and recreational activities, promoting teamwork, discipline, and a healthy lifestyle.
      Whether it’s cricket, volleyball, or athletics, our campus offers the perfect environment for
       students to compete, train, and unwind.</p>
    <div id="gettedimagescont">
      <p id="count">{totalcountofimages}photos</p>
      <button id="left" onClick={left}>Left</button>
      <img src={`data:${images[index].imageType};base64,${images[index].imageData}`}/>
      <p>{images[index].imageDes}</p>
      <button id="right" onClick={right}>Right</button>
    </div>
  </div>
  )
}

export default Upload
