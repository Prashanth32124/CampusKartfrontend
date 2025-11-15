import React, { useEffect, useState } from 'react';
import './CSS/Upload.css';
import { set, get } from 'idb-keyval';

// Split WORDS into letters
const splitWord = (text) => {
  return text.split(" ").map((word, i) => (
    <span key={i} className="word">
      {word.split("").map((char, j) => (
        <span key={j} className="letter">{char}</span>
      ))}
      &nbsp;
    </span>
  ));
};

function Upload() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const totalcountofimages = images.length;

  useEffect(() => {
    get('klu_images').then(cachedImages => {
      if (cachedImages) setImages(cachedImages);
    });

    fetch('https://rp2backend.vercel.app/klimages')
      .then(res => res.json())
      .then(data => {
        set('klu_images', data);
        setImages(data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!images.length) {
    return <p>Loading data, please wait...</p>;
  }

  const left = () => {
    setIndex(index <= 0 ? images.length - 1 : index - 1);
  };

  const right = () => {
    setIndex(index >= images.length - 1 ? 0 : index + 1);
  };

  return (
    <div>
      <nav>
  <ul>
    <li><a href="Klinfo">College Information & Overview</a></li>
    <li><a href="details">Admission Requirements & Checklist</a></li>
    <li><a href="upload">Document Upload Portal</a></li>
    <li><a href="Klupielifescore">KluLifeScore</a></li>
    <li><a href="Klulifescore">Provide Feedback</a></li>
    <li><a href="Newhomepage">← Back to College Listings</a></li>
  </ul>
</nav>


      <div id="gettedimagescont">
        <p id="count">{totalcountofimages} photos</p>

        <button id="left" onClick={left}>◀</button>

        <img
          src={`data:${images[index].imageType};base64,${images[index].imageData}`}
          alt="Campus View"
        />

        <p>{images[index].imageDes}</p>

        <button id="right" onClick={right}>▶</button>
      </div>
    </div>
  );
}

export default Upload;
