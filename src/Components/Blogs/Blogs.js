import React, { useRef } from "react";
import "./Blogs.css";
import rightArrow from "../../Images/arrow-narrow-right.png";
import leftArrow from "../../Images/arrow-narrow-left.png";
import blog_1 from "../../Images/blog_1.png";
import blog_2 from "../../Images/blog_2.png";
import blog_3 from "../../Images/blog_3.png";
import blog_btn_plus from "../../Images/blog_btn_plus.png";

const Blogs = () => {
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
    <div className="blogSection">
      <div>
        <div className="blog_sub_heading">Helping Businesses Since 1987</div>
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="blog_heading">Stay Update with TRoo Agency</h3>
            <h3 className="blog_heading">News & Blogs</h3>
          </div>
          <div className="arrowGroup">
            <span className="arrows" onClick={btnpressprev}>
              <img src={leftArrow} alt="arroeRight" />
            </span>
            <span className="arrows" onClick={btnpressnext}>
              <img src={rightArrow} alt="arroeleft" />
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="product-carousel">
          <div className="product-container" ref={boxRef}>
            <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">8 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_2} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_3} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">6 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_1} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">8 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_3} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_2} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  SEO Statistics You Should Know in 2022
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">7 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>
            <div className="mycard">
              <img className="blog_img" src={blog_3} alt="blog" />
              <div className="blog_block">
                <h3 className="blog_block_heading">
                  How To Use a Remarketing Strategy To Get More
                </h3>
                <div className="blog_block_text">
                  <p className="blog_text">6 August 2022</p>
                  <p className="blog_text blog_text_name">Theresa Underwood</p>
                </div>
                <div className="block_circle">
                  <img src={blog_btn_plus} alt="cart circle" />
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
