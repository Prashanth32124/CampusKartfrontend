import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Home.css';
import p1 from './images/prashanth.png';
import p2 from './images/rasheed1.png';
import p3 from './images/jafar.png';

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
          <p> Web Developer (MERN)</p>
        </div>
      </div>

      
      <div className="researchers-heading">
        <h3>Researchers</h3>
        <p><i>(They helped in gathering college & CG details)</i></p>
      </div>

      <div className="researchers">
        <div className="researcher-card">
          <img src={p2} alt="Rasheed" />
          <div className="info">
            <h4>Rasheed</h4>
            <p>Helped collect CG & college data</p>
          </div>
        </div>

        <div className="researcher-card">
          <img src={p3} alt="Jafar" />
          <div className="info">
            <h4>Jafar</h4>
            <p>Helped collect CG & college data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
