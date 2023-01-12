import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
  let facebookurl = "https://www.facebook.com/"
  let twitterurl = "https://twitter.com/"
  let linkedinurl="https://in.linkedin.com/"
  let instagramurl="https://www.instagram.com/"

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_nav">
          <div>
            <Link to="/">
              <img src={Logo} alt="img" />
            </Link>
          </div>

          <ul className="navmanu_footer">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/service">Our Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer_para_section">
          <p className="footer_para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          <div className="footer_icons">
            <a href={facebookurl}><FaFacebookF className="footer_social" /></a>
            <a href={twitterurl}><FaTwitter className="footer_social" /></a>
            <a href={linkedinurl}><FaLinkedinIn className="footer_social" /></a>
            <a href={instagramurl}><FaInstagram className="footer_social" /></a>
          </div>
        </div>
        <hr />
        <div className="footer_buttom_text">
          <div className="footer_para">
            Copyright © 2022. troothemes. All rights reserved.
          </div>
          <div className="d-flex justify-content-between">
            <div className="footer_para">Terms & Conditions</div>
            <div className="footer_para">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
