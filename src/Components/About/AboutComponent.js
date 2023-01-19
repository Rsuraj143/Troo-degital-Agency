import "./About.css";

import AboutImg from "../../Images/about_img.png";
import thumbIcon from "../../Images/thumbIcon.png";
import handsIcon from "../../Images/handsIcon.png";
import { HiChevronRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
const AboutComponent = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");
  return (
    <div className={datanew}>
      <div className="AboutImg">
        <div className="aboutContainer">
          <div className="about_left_container">
            <h5 className="about_sub_heading">Helping Businesses Since 1987</h5>
            <h2 className="about_heading">
              We Ensure Only Quality Digital Services for our Clients
            </h2>
            <h4 className="about_para_heading">
              Lorem Ipsum is simply dummy text of the printing and is
              typesetting industry.
            </h4>
            <p className="about_para">
              Lorem Ipsum is simply dummy text of the printing and is
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500 book standard dummy text.
            </p>
            <div className="about_left_devision" >
              <div className="about_card">
                <div>
                  <img
                    src={handsIcon}
                    alt="handsIcon"
                    className="about_icon"
                  />
                </div>
                <h4 className="about_card_heading">Qualified Consultants</h4>
              </div>
              <div className="about_card">
                <div>
                  <img
                    src={thumbIcon}
                    alt="ThumbIcon"
                    className="about_icon"
                  />
                </div>
                <h4 className="about_card_heading">Trusted Since 1987</h4>
              </div>
            </div>
            <p className="about_para">
              Lorem Ipsum is simply dummy text of the printing and is
              typesetting industry. Lorem Ipsum has been the industry.
            </p>
            <div className="btn_outer">
              <Link>
                <button className="button">
                  <span className="btn_text">Our Services</span>
                  <HiChevronRight className="rightangle_icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="about_right_container">
            <div className="about_img_cont">
              <div className="about_img_block">
                <img src={AboutImg} alt="aboutimg" className="aboutImg" />
              </div>
              <div className="experience">
                <h2 className="experience_year">35+</h2>
                <p className="experience_text">Year of</p>
                <p className="experience_text">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
