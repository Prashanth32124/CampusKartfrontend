import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Home.css';
import p1 from './images/prashanth.png';

function Home() {
  const navigate = useNavigate();

  const handleredirect = () => {
    navigate('/signup');
  };

  return (
    <div>
      <button id="bt1" onClick={handleredirect}>
        Welcome to the website
      </button>

      <div className="creator-container">
        <div className="left-img">
          <img src={p1} alt="Prashanth" />
        </div>
        <div className="right-text">
          <h2>Mudunuri Prashanth</h2>
          <p>Full Stack Web Developer (MERN)</p>
          <h3>Researchers</h3>
          <ul>
            <li>Rasheed</li>
            <li>Jafar</li>
          </ul>
          <p><i>(They helped in gathering college & CG details)</i></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
