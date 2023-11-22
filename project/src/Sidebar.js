import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
  const [isWonDropdownOpen, setIsWonDropdownOpen] = useState(false);

  const toggleClubDropdown = () => {
    setIsClubDropdownOpen(!isClubDropdownOpen);
  };

  const toggleWonDropdown = () => {
    setIsWonDropdownOpen(!isWonDropdownOpen);
  };

  return (
    <div id="wrapper" className="toggled">
      <div className="overlay"></div>

      {/* Sidebar */}
      <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
        <ul className="nav sidebar-nav">
          <div className="sidebar-header">
            <div className="sidebar-brand">
              <a href="#">커뮤니티</a>
            </div>
          </div>
          <li className="dropdown">
            <a
              href="#works"
              className={`dropdown-toggle ${isClubDropdownOpen ? 'open' : ''}`}
              onClick={toggleClubDropdown}
            >
              동아리 <span className="caret"></span>
            </a>
            <ul className={`dropdown-menu animated fadeInLeft ${isClubDropdownOpen ? 'show' : ''}`} role="menu">
              <div className="dropdown-header">와우</div>
              <li><a href="#pictures">BUG</a></li>
              <li><a href="#videos">UMC</a></li>
              <li><a href="#books">멋쟁이 사자처럼</a></li>
            </ul>
          </li>
          <li><a href="#about">갤러리</a></li>
          <li className="dropdown">
            <a
              href="#works"
              className={`dropdown-toggle ${isWonDropdownOpen ? 'open' : ''}`}
              onClick={toggleWonDropdown}
            >
              원영신 <span className="caret"></span>
            </a>
            <ul className={`dropdown-menu animated fadeInLeft ${isWonDropdownOpen ? 'show' : ''}`} role="menu">
              <div className="dropdown-header">와우</div>
              <li><a href="#pictures">와우</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /#sidebar-wrapper */}


    </div>
  );
};

export default Sidebar;