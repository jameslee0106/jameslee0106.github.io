import React from 'react'

export const Home = () => {

  const toggleNav = () => {
    const iconContainer = document.getElementById("icon-container");
    const body = document.body;
  
    body.dataset.nav = body.dataset.nav === "true" ? "false" : "true";
  
    if (body.dataset.nav === "true") {
      iconContainer.classList.add("open");
    } else {
      iconContainer.classList.remove("open");
    }
  };



  return (
    <>
    <main>
      <div id="myAudio">
        <audio controls autoplay loop>
          <source src="../src/assets/background.mp3" />
        </audio>
      </div>
      <div id="container">
        <div class="header-wrapper">
        <h1 class="header">Hey there, I'm James.</h1>
        <h1 class="header">Full stack developer.</h1>
        </div>
      </div>
    </main>

    <nav>
      <div id="nav-links">
        <a className="nav-link" href="./index.html">
          <h2 className="nav-link-label rubik-font">Home</h2>
          <img
            className="nav-link-image"
            src="https://insightpestnorthwest.com/wp-content/uploads/2021/04/andrea-leopardi-QfhbK2pY0Ao-unsplash-1.jpg"
            alt="Home"
          />
        </a>
        <a className="nav-link" href="./about.html">
          <h2 className="nav-link-label rubik-font">About Me</h2>
          <img
            className="nav-link-image"
            src="../src/assets/About.JPG"
            alt="About Me"
          />
        </a>
        <a className="nav-link" href="./projects.html">
          <h2 className="nav-link-label rubik-font">Projects</h2>
          <img
            className="nav-link-image"
            src="../src/assets/login.JPG"
            alt="Projects"
          />
        </a>
        <a className="nav-link" href="./contact.html">
          <h2 className="nav-link-label rubik-font">Contact</h2>
          <img
            className="nav-link-image"
            src="../src/assets/PNW.JPG"
            alt="Contact"
          />
        </a>
      </div>
    </nav>

    <div className="menu">
      <button id="nav-toggle" onClick={toggleNav} type="button" >
        <div id="icon-container">
          <img id="menu-icon" src="..src/assets/menu.png" alt="Menu Icon" />
          <img id="cross-icon" src="..src/assets/cross.png" alt="Cross Icon" />
        </div>
      </button>
    </div>
    
    </>
  )
}
