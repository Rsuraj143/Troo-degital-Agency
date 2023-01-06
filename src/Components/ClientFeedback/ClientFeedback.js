import React, { useEffect, useRef, useState } from "react";
import "./ClientFeedback.css";
import { useLocation } from "react-router-dom";
import aboutellips from "../../Images/AboutEllipse.png";
import FeedbackImg_1 from "../../Images/FeedbackImg_1.png";
import FeedbackImg_2 from "../../Images/FeedbackImg_2.png";
import FeedbackImg_3 from "../../Images/FeedbackImg_3.png";
import rating from "../../Images/ratting.png";
import feedback_design from "../../Images/feedback_design.svg";
import rightArrow from "../../Images/arrow-narrow-right.png";
import leftArrow from "../../Images/arrow-narrow-left.png";

const ClientFeedback = () => {
  const location = useLocation();
  const datanew = location.pathname.replace("/", "");
  console.log(datanew, "::datanew");

  const boxRef = useRef(null);

  const btnpressprev = () => {
    const { clientWidth, scrollLeft } = boxRef.current;
    boxRef.current.scrollLeft = scrollLeft - clientWidth;
    console.log(boxRef.current.scrollLeft);
  };

  const btnpressnext = () => {
    const { clientWidth, scrollLeft } = boxRef.current;
    boxRef.current.scrollLeft = scrollLeft + clientWidth;
    console.log(boxRef.current.scrollLeft);
  };
  return (
    <div id="" className="client_feedback">
      <div className="feedback_banner">
        <div className="fedback_banner_container">
          <div>
            <div className="client_banner_subheading">Clients Feedbacks</div>
            <div className="feedback_banner_heading">
              What Our Clients Say About
            </div>
            <div className="feedback_banner_heading">Our Services</div>
          </div>
        </div>
      </div>

      <div className="client_carousel_container">
        <div className="arrowGroup justify-content-end">
          <span className="arrows" onClick={btnpressprev}>
            <img src={leftArrow} alt="arroeRight" />
          </span>
          <span className="arrows" onClick={btnpressnext}>
            <img src={rightArrow} alt="arroeleft" />
          </span>
        </div>
        <div className="client_carousel">
          <div className="client_container" ref={boxRef}>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_1} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_2} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_3} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_1} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_1} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
            <div className="client_carosael_card">
              <div className="feedback_header">
                <img src={rating} alt="rating" />
                <img src={feedback_design} alt="feedback design icon" />
              </div>
              <p className="client_carousael_body">
                There are many variations of passages of Lorem Ipsum and
                available, and it but the majority many have suffered alteration
                in some it is and form, by injected humor, or randomized words
                which.
              </p>
              <div className="info_feedback">
                <img src={FeedbackImg_1} alt="smile1" />
                <div className="feedback_title">
                  <h4 className="person_name">Randy Heart</h4>
                  <h6 className="person_desig">CEO & Founder</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
