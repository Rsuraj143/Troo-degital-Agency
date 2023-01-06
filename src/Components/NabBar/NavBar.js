import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Images/Arrow.png";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import Call from "../../Images/call.png";
import Hamburger from "../../Images/Humberders.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} className="logoImg" alt="img" />
        </Link>
      </div>

      <Drawer className="nav-manu active" />

      <div className="navbar_number">
        <div className="callImg">
          <img src={Call} alt="call img" />
        </div>
        <div>
          <div className="callText">Call Us on</div>
          <div className="num">+44 123 456 7890</div>
        </div>
      </div>

      <div className="humburgerLogo">
        {click ? (
          <MdClose
            size={40}
            style={{ color: "#fff" }}
            onClick={handleClick}
          ></MdClose>
        ) : (
          <img src={Hamburger} alt="humburrgerLogo" onClick={handleClick} />
        )}

        <div className={`hamburger_btn_manu ${click ? "demo_class" : ""}`}>
          <div className="drawer_container">
            <div className="drawer_btn_container">
              <Link>
                <button className="drawer_btn">
                  <span className="drawer_btn_text">Log In</span>
                  <img className="btn_arrow" src={arrow} alt="arrow" />
                </button>
              </Link>
              <Link>
                <button className="drawer_btn">
                  <span className="drawer_btn_text">Sign Up</span>
                  <img className="btn_arrow" src={arrow} alt="arrow" />
                </button>
              </Link>
            </div>
            <div className="drawer_manu">
            <Drawer />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const Drawer = (props) => {
  return (
    <ul {...props}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/service">Our Services</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/teams">Our Team</Link>
      </li>
      <li>
        <Link to="/testimonial">Testimonial</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};
