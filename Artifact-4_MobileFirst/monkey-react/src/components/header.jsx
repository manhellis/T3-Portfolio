// import React from 'react';


const Header = () => {
  return (
    <header>
          <div id="branding">
              <img src='/monkey.svg' alt="monkey logo"/>
              <i className="fa-solid fa-bars fa-lg"></i>
          </div>
          <nav>
              <a href="#home">Home</a>
              <a href="#home">About</a>
              <a href="#home">Portfolio</a>
              <a href="#home">Business</a>
              <a href="#home">Contact</a>
          </nav>
    </header>
  );
};

export default Header;
