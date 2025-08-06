import React from 'react';
import './CSS/MainHome.css';
function MainHome() {
  return (
    <div className="main-home">
      <nav className="main-nav">
        <ul>
          <li><a href="/Home">About</a></li>
          <li><a href="/login">Signin</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>

      <header className="main-header">
        <h1>Welcome to Campus Kart</h1>
        <p>Your gateway to exploring colleges and admission details.</p>
      </header>

      <section className="about-section">
        <h2>About Campus Kart</h2>
        <p>
          Campus Kart is a one-stop platform designed to help students explore and choose 
          B.Tech colleges with ease. Our platform provides detailed college information, 
          admission requirements, checklists, and quick access to official exam links. 
          Whether you’re looking for college overviews, required documents, or entrance exam details, 
          Campus Kart makes the process simple and accessible.
        </p>
      </section>

      <section className="features-section">
        <h2>What You Can Do Here</h2>
        <ul>
          <li>Browse detailed profiles of colleges across India.</li>
          <li>Check admission requirements and eligibility criteria.</li>
          <li>Upload and manage your application documents securely.</li>
          <li>Get quick links to entrance exam registrations.</li>
          <li>Access resources anytime, from any device.</li>
        </ul>
      </section>

      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Campus Kart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainHome;
