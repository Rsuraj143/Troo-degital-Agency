import React, { useRef } from "react";
import "./ClientFeedback.css";
import FeedbackImg_1 from "../../Images/FeedbackImg_1.png";
import FeedbackImg_2 from "../../Images/FeedbackImg_2.png";
import FeedbackImg_3 from "../../Images/FeedbackImg_3.png";
import rating from "../../Images/ratting.png";
import feedback_design from "../../Images/feedback_design.svg";
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
    btn1,
    btn2,
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        ref={btn1}
      >
        <FaAngleLeft />
      </button>
      <button onClick={() => next()} ref={btn2}>
        <FaAngleRight />
      </button>
    </div>
  );
};

const ClientFeedback = () => {
  const btn1 = useRef();
  const btn2 = useRef();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2200, min: 1440 },
      items: 3,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    },
  };

  const handleLeft = () => {
    btn1.current.click();
  };
  const handleRight = () => {
    btn2.current.click();
  };

  return (
    <div  className="client_feedback">
      <div className="feedback_banner">
        <div className="fedback_banner_container">
          <div>
            <h5 className="client_banner_subheading">Clients Feedbacks</h5>
            <h2 className="feedback_banner_heading">
              What Our Clients Say About
            </h2>
            <h2 className="feedback_banner_heading">Our Services</h2>
          </div>
        </div>
      </div>

      <div className="client_carousel_container">
        <div className="arrowGroup justify-content-end mb-3 me-3">
          <span className="feedbackArrow" onClick={handleLeft}>
            <BsArrowLeft/>
          </span>
          <span className="feedbackArrow" onClick={handleRight}>
            <BsArrowRight/>
          </span>
        </div>
        <Carousel
          arrows={false}
          responsive={responsive}
          customButtonGroup={<ButtonGroup btn1={btn1} btn2={btn2} />}
          infinite={true}
          className="carousels"
        >
      <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating" className="ratingLogo" />
                  <img src={feedback_design} alt="feedback design icon" className="quote" />
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_1} alt="smile1" className="personimg" />
                  <div className="feedback_title">
                    <h4 className="client_name">Adam Holland</h4>
                    <h5 className="client_desig">Google CEO</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating"  className="ratingLogo"/>
                  <img src={feedback_design} alt="feedback design icon" className="quote"/>
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_2} alt="smile1" className="personimg"  />
                  <div className="feedback_title">
                    <h4 className="client_name">Christina Hathway</h4>
                    <h5 className="client_desig">Flipkart CEO</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating" className="ratingLogo" />
                  <img src={feedback_design} alt="feedback design icon" className="quote"/>
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_3} alt="smile1" className="personimg" />
                  <div className="feedback_title">
                    <h4 className="client_name">Steve Namker</h4>
                    <h5 className="client_desig">Facebook CEO</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating" className="ratingLogo" />
                  <img src={feedback_design} alt="feedback design icon" className="quote"/>
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_1} alt="smile1" className="personimg" />
                  <div className="feedback_title">
                    <h4 className="client_name">Randy Heart</h4>
                    <h6 className="client_desig">CEO & Founder</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating" className="ratingLogo"/>
                  <img src={feedback_design} alt="feedback design icon" className="quote"/>
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_1} alt="smile1" className="personimg"  />
                  <div className="feedback_title">
                    <h4 className="client_name">Randy Heart</h4>
                    <h6 className="client_desig">CEO & Founder</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="client_carosael_card_main">
              <div className="client_carosael_card">
                <div className="feedback_header">
                  <img src={rating} alt="rating" className="ratingLogo"/>
                  <img src={feedback_design} alt="feedback design icon" className="quote"/>
                </div>
                <p className="client_carousael_body">
                  There are many variations of passages of Lorem Ipsum and
                  available, and it but the majority many have suffered
                  alteration in some it is and form, by injected humor, or
                  randomized words which.
                </p>
                <div className="info_feedback">
                  <img src={FeedbackImg_1} alt="smile1" className="personimg" />
                  <div className="feedback_title">
                    <h4 className="client_name">Randy Heart</h4>
                    <h6 className="client_desig">CEO & Founder</h6>
                  </div>
                </div>
              </div>
            </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientFeedback;
