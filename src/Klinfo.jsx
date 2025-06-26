import React, { useState } from 'react';
import './CSS/Klinfo.css';
import klimg1 from './images/kl.jpg';
import kl from './images/Kllogo.png';
import Collegeinfo from './Klu/Collegeinfo';
import Courses from './Klu/Courses';
import Fees from './Klu/Fees';
import Admissions from './Klu/Admissions';
import Details from './Details';
import { useNavigate } from 'react-router-dom';

function Klinfo() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Collegeinfo");

  const renderSection = () => {
    switch (activeSection) {
      case "Collegeinfo":
        return <Collegeinfo />;
      case "Courses":
        return <Courses />;
      case "Details":
        return <Details />;
      case "Admissions":
        return <Admissions />;
      default:
        return <Collegeinfo />;
    }
  };

  return (
    <div className="klinfo-wrapper">
      <div className="banner">
        <img src={klimg1} alt="KL University Campus" />
      </div>

      <div className="logo-container">
        <img src={kl} alt="KL University Logo" />
      </div>

      <h2 className="main-heading">
        KL University, Guntur: Courses, Fees, Ranking, Admission 2025, Placements, Cutoff
      </h2>

      <nav className="navbar">
        <ul>
          <li><button onClick={() => setActiveSection("Collegeinfo")}>College Info</button></li>
          <li><button onClick={() => setActiveSection("Courses")}>Courses</button></li>
          <li><button onClick={() => setActiveSection("Details")}>Admission Requirements</button></li>
          <li><button onClick={() => setActiveSection("Admissions")}>Admissions</button></li>
          <li><button className="back-btn" onClick={() => navigate('/Newhomepage')}>⬅ Back to Colleges</button></li>
        </ul>
      </nav>

      <div className="content-section">
        {renderSection()}
      </div>
    </div>
  );
}

export default Klinfo;
