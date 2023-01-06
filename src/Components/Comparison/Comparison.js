import React from "react";
import "./Comparison.css";
import ComparisonImg from "../../Images/comparisonImg.png";
import Accordion from "react-bootstrap/Accordion";

const Comparison = () => {
  return (
    <div>
      <div className="compare_BG">
        <div className="compare_container">
          <div className="container_left" >
            <div className="compare_sub_heading">
                How We Different to Others
            </div>
            <h3 className="comnpare_heading">Why People Choose Us</h3>
            <p className="compare_para">
              Lorem Ipsum is simply dummy text of the printing and is
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500 book standard dummy text.
            </p>
            <img src={ComparisonImg} alt="comparisonIMg" style={{width:"100%"}} />
          </div>

          <div className="container_right" >
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="accordion-item" eventKey="0">
                <Accordion.Header>
                  Appropriate for Your Specific Business
                </Accordion.Header>
                <Accordion.Body>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Design & Development Troubleshooting
                </Accordion.Header>
                <Accordion.Body>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Online Support & Action</Accordion.Header>
                <Accordion.Body>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Our Experience spans Every Industry
                </Accordion.Header>
                <Accordion.Body>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>2000+ Happy Users</Accordion.Header>
                <Accordion.Body>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
