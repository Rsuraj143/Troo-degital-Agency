import React from "react";
import "./Service.css";
import tagicon from "../../Images/tagIcon.png";
import soundIcon from "../../Images/SoundIcon.png";
import cloudIcon from "../../Images/CloudIcon.png";
import graphIcon from "../../Images/GraphIcon.png";
import SEOicon from "../../Images/SeoIcon.png";
import paperPen from "../../Images/PaperPan.png";
import serviceCardCircle from "../../Images/serviceCardCircle.png";
import { useLocation } from "react-router-dom";

const ServiceComponent = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");
  console.log(datanew, "::datanew");

  return (
    <div id={datanew}>
      <div className="service">
        <div className="serviceContainer" >
          <h5 className="service_sub_heading">Our Services List</h5>
          <div className="py-3">
            <h2 className="service_heading">Services We’re Providing to</h2>
            <h2 className="service_heading">Our Customers</h2>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-3 ">
            <div class="col" data-aos="flip-left">
              <div class="maincard">
                <div class="card-body card">
                  <h3 class="servicecard_title">Digital Marketing</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={soundIcon} alt="Sound Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="maincard">
                <div class="card-body card">
                  
                  <h3 class="servicecard_title">Product Development</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={tagicon} alt="Tage Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class=" maincard">
                <div class="card-body card">
    
                  <h3 class="servicecard_title">SEO Services</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={SEOicon} alt="SEO Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="maincard">
                <div class="card-body card">
                  
                  <h3 class="servicecard_title">Cloud Hosting</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={cloudIcon} alt="Cloud Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="maincard">
                <div class="card-body card">
                  
                  <h3 class="servicecard_title">Content Management</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={paperPen} alt="PaperPan Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-left">
              <div class="maincard">
                <div class="card-body card">
                 
                  <h3 class="servicecard_title">Digital Marketing</h3>
                  <p class="card-text card_paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="service_icon_img">
                    <img src={graphIcon} alt="Graph Icon" height={80} />
                  </div>
                </div>
                <div className="serviceCircle">
                  <img src={serviceCardCircle} alt="cart circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
