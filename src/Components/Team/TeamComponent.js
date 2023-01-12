import React from "react";
import "./Team.css";
import { useLocation } from "react-router-dom";

import team1 from "../../Images/team1.png";
import team2 from "../../Images/team2.png";
import team3 from "../../Images/team3.png";
import team4 from "../../Images/team4.png";
import team5 from "../../Images/team5.png";
import team6 from "../../Images/team6.png";
import team7 from "../../Images/team7.png";
import team8 from "../../Images/team8.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TeamComponent = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");

  return (
    <div id={datanew}>
      <div className="team_container">
        <h5 className="service_sub_heading">Our Team Member</h5>
        <div className="py-3">
          <h2 className="service_heading">We Have Professional</h2>
          <h2 className="service_heading">Creative Team</h2>
        </div>
        <div class="team_grid_container">
          <div class="person">
            <img src={team1} alt="team1" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team2} alt="team2" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team3} alt="team3" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team4} alt="team4" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team5} alt="team5" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team6} alt="team6" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team7} alt="team7" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team8} alt="team8" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h5 className="person_desig">CEO & Founder</h5>
              <div className="d-flex justify-content-center ">
                <div className="team_social">
                  <FaFacebookF className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaInstagram className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaLinkedinIn className="team_social_icon" />
                </div>
                <div className="team_social">
                  <FaTwitter className="team_social_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
