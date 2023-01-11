
import "./HeroImg.css";
import { Link } from "react-router-dom";
import hand from "../../Images/hand.svg"
import rocket from "../../Images/rockrt.svg"
import noteicon  from "../../Images/iconnote.svg"
import { HiChevronRight } from 'react-icons/hi';

const HeroImg = () => {
  
  return (
    <div data-aos="fade-down" >
      <div className="HeroImg" >
        <div className="Banner">
          <div className="bannerBlock">
            <div className="col">
              <h3 className="headingSm">
                Helping Businesses Since 1987
              </h3>
              <h1 className="headingBg" data-aos="fade-down" >
                Grow You Online Business With Us & Make Success
              </h1>
              <div className="mt-3">
                <Link>
                  <button className="button">
                    <span className="btn_text">Explore More</span>
                    <HiChevronRight className="rightangle_icon"/>
                  </button>
                </Link>
              </div>
            </div>

            <div className="col play">
              <div className="circle">
                <div  className="circleLogo">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mainherocard">
          <div className="herocard" data-aos="fade-right">
              <div className="icon_class">
                <img src={rocket} alt="icopnRocker" />
              </div>
              <div className="heading_class">
                <h3 className="herocard_header">Creative Strategy</h3>
                <p className="herocard_text">There are many lorem variations passages and it is of Lorem Ipsum available but the majority</p>
              </div>
          </div>
          <div className="herocard" data-aos="fade-up">
              <div className="icon_class" >
              <img src={hand} alt="hand" />
              </div>
              <div className="heading_class">
                <h3 className="herocard_header">Digital Solution</h3>
                <p className="herocard_text">There are many lorem variations passages and it is of Lorem Ipsum available but the majority</p>
              </div>
          </div>
          <div className="herocard" data-aos="fade-right">
              <div className="icon_class">
              <img src={noteicon} alt="note icon" />
              </div>
              <div className="heading_class">
                <h3 className="herocard_header">Analysis & Report</h3>
                <p className="herocard_text">There are many lorem variations passages and it is of Lorem Ipsum available but the majority</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
