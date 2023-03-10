import React from "react";
import "./Contact.css";
import phone from "../../Images/phone.png";
import email from "../../Images/email.png";
import location from "../../Images/location.png";
import { HiChevronRight } from 'react-icons/hi';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const ContactComponent = () => {
  return (
    <div>
      <div className="contact_section">
        <div className="contact_container">
          <div className="contact_left" >
            <h5 className="compare_sub_heading">Let's Work Together</h5>
            <h2 className="comnpare_heading">Need a successful project?</h2>
            <p className="compare_para">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="contact_details_container">
              <div>
                <div className="contact_details_contant">
                  <img src={phone} alt="phone img" className="contact_icons" />
                  <div>
                    <h4 className="contact_details_heading">Phone</h4>
                    <p className="conact_details_sub">+44 123 456 7890</p>
                  </div>
                </div>
                <div className="contact_details_contant">
                  <img src={email} alt="email" className="contact_icons" />
                  <div>
                    <h4 className="contact_details_heading">Email</h4>
                    <p className="conact_details_sub">contact@trootemes.com</p>
                  </div>
                </div>
                <div className="contact_details_contant">
                  <img
                    src={location}
                    alt="location"
                    className="contact_icons"
                  />
                  <div>
                    <h4 className="contact_details_heading">Location</h4>
                    <p className="conact_details_sub">
                      98 Lancaster Court Pough keepsie, NY 12601
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_right" >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2 },
              }}
              noValidate
              autoComplete="off"
              className="formBox form_text_heading"
            >
              <div className="contact_text_field">
                <div>
                  <div>
                    <div className="label ">Name</div>
                    <TextField
                      label=""
                      placeholder="Name"
                      variant="standard"
                    />
                  </div>
                  <div>
                    <div className="label ">Email</div>
                    <TextField
                      label=""
                      placeholder="Email"
                      variant="standard"
                    />
                  </div>
                </div>
                <div>
                  <div className="label ">Phone</div>
                  <TextField label="" placeholder="Phone" variant="standard" />
                  <div className="select_text">
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        className="select_lebel"
                      >
                        Subject
                      </InputLabel>
                      <NativeSelect
                        defaultValue={10}
                        className="select_text_option"
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={10}>Subject</option>
                        <option value={20}>For trile</option>
                        <option value={30}>purchasing</option>
                      </NativeSelect>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div>
                <div className="label ">How can we help you?</div>
                <TextField
                  label=""
                  placeholder="Message"
                  variant="standard"
                  className="form_inputs"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="form_btn">
                <button className="button">
                  <span className="btn_text">Submit Form</span>
                  <HiChevronRight className="rightangle_icon"/>
                </button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
