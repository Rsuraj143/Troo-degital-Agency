import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import Call from "../../Images/call.png";
import Hamburger from "../../Images/Humberders.png";
import { HiChevronRight } from "react-icons/hi";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

        <div className={`hamburger_btn_manu ${click ? "drawer_open" : "drawer_close"}`}>
          <div className="drawer_container">
            <div className="drawer_btn_container">
              <Link>
                <button className="button">
                  <span className="btn_text">Log in</span>
                  <HiChevronRight className="rightangle_icon" />
                </button>
              </Link>
              <Link>
                <button className="button">
                  <span className="btn_text">Sign Up</span>
                  <HiChevronRight className="rightangle_icon" />
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
  const activeLink = "text-danger";
  const normal = "";
  return (
    <ul {...props}>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normal)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Our Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teams"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/testimonial"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Testimonial
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeLink : normal)}
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};
