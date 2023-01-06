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
import facebook from "../../Images/FB.svg";
import twitter from "../../Images/TW.svg";
import linkedin from "../../Images/LN.svg";
import insta from "../../Images/IN.svg";


const TeamComponent = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");
  console.log(datanew, "::datanew");
  return (
    <div id={datanew}>
      <div className="team_container">
        <div className="service_sub_heading">Our Team Member</div>
        <div className="py-3">
          <div className="service_heading">We Have Professional</div>
          <div className="service_heading">Creative Team</div>
        </div>
        <div class="team_grid_container">
          <div class="person" >
            <img src={team1} alt="team1" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team2} alt="team2" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team3} alt="team3" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team4} alt="team4" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team5} alt="team5" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team6} alt="team6" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team7} alt="team7" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <div class="person">
            <img src={team8} alt="team8" className="personIMG" />
            <div className="team_card">
              <h4 className="person_name">Randy Heart</h4>
              <h6 className="person_desig">CEO & Founder</h6>
              <div className="d-flex justify-content-center gap-2">
                <img
                  className="team_social"
                  src={facebook}
                  width={26}
                  alt="Facebook"
                />
                <img className="team_social" src={twitter} alt="twitter" />
                <img className="team_social" src={linkedin} alt="linkedin" />
                <img className="team_social" src={insta} alt="insta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
