
import "./PricingCard.css";
import { Link } from "react-router-dom";
import { HiChevronRight } from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';


const PricingCard = () => {
  return (
    <div className="pricing_card_section">
      <div className="pricing_card">
        <div className="pricing_banner_container" >
          <div>
            <h5 className="pricing_sub_heading">
              Our Best Pricing Plan
            </h5>
            <div>
              <h2 className="pricing_heading">Choose package match </h2>
              <h2 className="pricing_heading">Projects List</h2>
            </div>
          </div>

          <div className="pricing_card_contain" >
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h3 className="pricing_card_title">Starter Plan</h3>
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
                            <HiChevronRight className="rightangle_icon"/>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                      <BiCheck className="checkmark"/>
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                      <BiCheck className="checkmark"/>
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h3 className="pricing_card_title">Basic Plan</h3>
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
                            <HiChevronRight className="rightangle_icon"/>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                      <BiCheck className="checkmark"/>
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h3 className="pricing_card_title">Standaed Plan</h3>
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
                            <HiChevronRight className="rightangle_icon"/>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                      <RxCross2 className="checkmark"/>
                        <span>Plastic Roofing Sheet Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col main_pricingcard">
                <div className="pricingcard">
                  <h3 className="pricing_card_title">Professional Plan</h3>
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
                            <HiChevronRight className="rightangle_icon"/>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="pricingcard_right">
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Faster Measurement</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Determine ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <BiCheck className="checkmark"/>
                        <span>Multiply the ground-level squares</span>
                      </div>
                      <div className="pricing_card_texts">
                        <RxCross2 className="checkmark"/>
                        <span>Fibre sheet roofing designs</span>
                      </div>
                      <div className="pricing_card_texts">
                        <RxCross2 className="checkmark"/>
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
          <h2 className="pricing_banner_header">
            Always Delivering Quality Solutions
          </h2>
          <p className="pricing_banner_para">
            Lorem ipsum is are many variations of pass.
          </p>
          <div className="text-center">
            <button className="button">
              <span className="btn_text">Contact Us</span>
              <HiChevronRight className="rightangle_icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
