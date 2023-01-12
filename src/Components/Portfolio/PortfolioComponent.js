import "./Portfolio.css";
import React from "react";
import { useLocation } from "react-router-dom";
import portfolioimg1 from "../../Images/portfolioimg1.png";
import portfolioimg2 from "../../Images/portfolioimg2.png";
import portfolioimg3 from "../../Images/portfolioimg3.png";
import portfolioimg4 from "../../Images/portfolioimg4.png";
import portfolioimg5 from "../../Images/portfolioimg5.png";
import portfolioimg6 from "../../Images/portfolioimg6.png";
import cardtexticon from "../../Images/cardtexticon.png";

const PortfolioComponent = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");
  return (
    <div id={datanew}>
      <div className="portfolio">
        <div className="portfolio_banner" >
          <div className="portfolio_banner_container" >
            <h5 className="banner_sub_heading">Recently Completed Work</h5>
            <h2 className="banner_heading">Our Recently Completed </h2>
            <h2 className="banner_heading">Projects List</h2>
          </div>
        </div>
        <div className="portfolio_container" >
          <div class="portfolio_grid_container">
            <div class="small">
              <img
                src={portfolioimg1}
                alt="portfolioimg1"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Business</h5>
                  <h4 className="heading">Platform integration</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
            <div class="large">
              <img
                src={portfolioimg2}
                alt="portfolioimg2"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Technology</h5>
                  <h4 className="heading">Cyber security</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
            <div class="medium">
              <img
                src={portfolioimg3}
                alt="portfolioimg3"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Technology</h5>
                  <h4 className="heading">Smart marketing</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
            <div class="large">
              <img
                src={portfolioimg4}
                alt="portfolioimg4"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Strategy</h5>
                  <h4 className="heading">Tech solutions</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
            <div class="medium">
              <img
                src={portfolioimg6}
                alt="portfolioimg6"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Design</h5>
                  <h4 className="heading">Deployment service</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
            <div class="small">
              <img
                src={portfolioimg5}
                alt="portfolioimg5"
                className="cardImg"
              />
              <div className="portfoliocard">
                <div>
                  <h5 className="sub_heading">Idea</h5>
                  <h4 className="heading">Innovative apps</h4>
                </div>
                <div className="cardicon">
                  <img src={cardtexticon} alt="cardtexticon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
