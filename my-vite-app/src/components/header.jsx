
import React from 'react';
import Jiologo from "../assets/Jiocinema.png";
import "../components/header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="right-header">
        <img src={Jiologo} alt="Jiologo" />
        <h5>Subscribe</h5>
      </div>

      <div className="left-header">
        <input
          type="text"
          placeholder='Search'
          className='input'
        />
      </div>
    </div>
  );
};

export default Header;


