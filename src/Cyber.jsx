import React, { useEffect, useState } from 'react';

function Cyber() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images when component mounts
    fetch('https://loud-adaptive-tamarind.glitch.me/klimages')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.log(err));
  }, []);

  
  if (images.length === 0) {
    return <p>No images found</p>;
  }

  let imageElements = [];
  for (let i = 0; i < images.length; i++) {
    imageElements.push(
      <img
        src={`data:${images[i].imageType};base64,${images[i].imageData}`}
        alt={`Image ${i}`}
      />
    );
  }

  return (
    <div>
      <h1>All KL College Images</h1>
      <div>{imageElements}</div>
    </div>
  );
}

export default Cyber;
