// Home.js (inside the 'components' folder)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      <div id="myAudio">
        <audio controls autoPlay loop>
          <source src="./assets/background.mp3" />
        </audio>
      </div>
      <div id="container">
        <div className="header-wrapper">
          <h1 className="header">Hey there, I'm James.</h1>
          <h1 className="header">Full stack developer.</h1>
        </div>
      </div>

      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <div id="nav-links" className="nav-links">
          <Link to="/" className="nav-link">
            <h2 className="nav-link-label rubik-font">Home</h2>
            <img
              className="nav-link-image"
              src="https://insightpestnorthwest.com/wp-content/uploads/2021/04/andrea-leopardi-QfhbK2pY0Ao-unsplash-1.jpg"
              alt="Home"
            />
          </Link>
          <Link to="/about" className="nav-link">
            <h2 className="nav-link-label rubik-font">About Me</h2>
            <img
              className="nav-link-image"
              src="/assets/About.jpg" // Make sure to use the correct path
              alt="About Me"
            />
          </Link>
          <Link to="/projects" className="nav-link">
            <h2 className="nav-link-label rubik-font">Projects</h2>
            <img
              className="nav-link-image"
              src="/assets/login.jpg" // Use the correct path
              alt="Projects"
            />
          </Link>
          <Link to="/contact" className="nav-link">
            <h2 className="nav-link-label rubik-font">Contact</h2>
            <img
              className="nav-link-image"
              src="/assets/PNW.jpg" // Use the correct path
              alt="Contact"
            />
          </Link>
        </div>
      </nav>

      <div className="menu">
        <button id="nav-toggle" onClick={toggleNav} type="button">
          <div id="icon-container">
            <img id="menu-icon" src="/assets/menu.png" alt="Menu Icon" />
            <img id="cross-icon" src="/assets/cross.png" alt="Cross Icon" />
          </div>
        </button>
      </div>
    </main>
  );
};

export default Home;
