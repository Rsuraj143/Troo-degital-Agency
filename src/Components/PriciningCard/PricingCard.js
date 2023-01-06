import React from "react";
import "./PricingCard.css";

import { Link } from "react-router-dom";
import arrow from "../../Images/Arrow.png";
import tickmark from "../../Images/tickmark.png";
import crossmark from "../../Images/crossmark.png";

const PricingCard = () => {
  return (
    <div className="pricing_card_section">
      <div className="pricing_card">
        <div className="pricing_banner_container" >
          <div>
            <div className="pricing_sub_heading">
              Our Best Pricing Plan
            </div>
            <div>
              <div className="pricing_heading">Choose package match </div>
              <div className="pricing_heading">Projects List</div>
            </div>
          </div>

          <div className="pricing_card_contain" >
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h5 className="pricing_card_title">Starter Plan</h5>
                  <div className="pricing_card_body">
                    <div className="card_price_section">
                      <div>
                        <span className="dollar">$20.00</span>
                        <span className="per_month">/ per Month</span>
                      </div>
                      <div className="offer">Save 25% on it</div>
                      <div className="mt-4">
                      <Link>
                          <button className="pricingCard_button">
                            <span className="pricingcard_btn_text">
                              Choose This Plan
                            </span>
                            <img className="btn_arrow" src={arrow} alt="arrow" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h5 className="pricing_card_title">Basic Plan</h5>
                  <div className="pricing_card_body">
                    <div className="card_price_section">
                      <div>
                        <span className="dollar">$40.00</span>
                        <span className="per_month">/ per Month</span>
                      </div>
                      <div className="offer">Save 25% on it</div>
                      <div className="mt-4">
                      <Link>
                          <button className="pricingCard_button">
                            <span className="pricingcard_btn_text">
                              Choose This Plan
                            </span>
                            <img className="btn_arrow" src={arrow} alt="arrow" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h5 className="pricing_card_title">Standaed Plan</h5>
                  <div className="pricing_card_body">
                    <div className="card_price_section">
                      <div>
                        <span className="dollar">$60.00</span>
                        <span className="per_month">/ per Month</span>
                      </div>
                      <div className="offer">Save 25% on it</div>
                      <div className="mt-4">
                        <Link>
                          <button className="pricingCard_button">
                            <span className="pricingcard_btn_text">
                              Choose This Plan
                            </span>
                            <img className="btn_arrow" src={arrow} alt="arrow" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h5 className="pricing_card_title">Professional Plan</h5>
                  <div className="pricing_card_body">
                    <div className="card_price_section">
                      <div>
                        <span className="dollar">$80.00</span>
                        <span className="per_month">/ per Month</span>
                      </div>
                      <div className="offer">Save 25% on it</div>
                      <div className="mt-4">
                        <Link>
                          <button className="pricingCard_button">
                            <span className="pricingcard_btn_text">
                              Choose This Plan
                            </span>
                            <img className="btn_arrow" src={arrow} alt="arrow" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={tickmark} className="mx-3" alt="rickmark" />
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                        <img src={crossmark} className="mx-3" alt="rickmark" />
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing_banner_section_image">
        <div className="pricing_banner_container_image">
          <h3 className="pricing_banner_header">
            Always Delivering Quality Solutions
          </h3>
          <p className="pricing_banner_para">
            Lorem ipsum is are many variations of pass.
          </p>
          <div className="text-center">
            <button className="pricingCard_banner_button">
              <span className="pricingcard_btn_text">Contact Us</span>
              <img className="btn_arrow" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
