import React, { useRef } from "react";
import "./Blogs.css";
import blog_1 from "../../Images/blog_1.png";
import blog_2 from "../../Images/blog_2.png";
import blog_3 from "../../Images/blog_3.png";
import blog_btn_plus from "../../Images/blog_btn_plus.png";

import { FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Blogs = () => {
  const btn1 = useRef();
  const btn2 = useRef();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2200, min: 1440 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 2,
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
    <div className="blogSection">
      <div className="blog_header_cont">
        <h5 className="blog_sub_heading">Helping Businesses Since 1987</h5>
        <div className="blog_heading_section">
          <div>
            <h2 className="blog_heading">Stay Update with TRoo Agency</h2>
            <h2 className="blog_heading">News & Blogs</h2>
          </div>
          <div className="arrowGroup">
            <span className="blogarrows" onClick={handleLeft}>
              <FaAngleLeft/>
            </span>
            <span className="blogarrows" onClick={handleRight}>
              <FaAngleRight/>
            </span>
          </div>
        </div>
      </div>
      
      <div className="blog_caroseal">
      <Carousel
          arrows={false}
          responsive={responsive}
          customButtonGroup={<ButtonGroup btn1={btn1} btn2={btn2} />}
          infinite={true}
          className="carousels"
        >
         <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">8 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_2} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_3} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">6 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">8 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_3} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_2} alt="blog" />
              <div className="blog_block">
                <h4 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h4>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                <FaPlus/>
                </div>
              </div>
            </div>
        </Carousel>
      </div>

    </div>
  );
};

export default Blogs;
