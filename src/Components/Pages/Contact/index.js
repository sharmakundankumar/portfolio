import React from "react";
import "./App.css";
import Button from "../../Buttons/Submit/index";

const index = () => {
  return (
    <>
      <div className="contact">
        <div className="form-container">
          <div className="contact-form">
            <h1>Contact Me</h1>
            <div className="form">
              <input type="text" id="name" placeholder="Name" />
              <input type="Number" id="number" placeholder="Contact Number" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <span>
                <input type="radio" name="Gender" id="Male" className="Gender"/> Male
                <input type="radio" name="Gender" id="Female" className="Gender" /> Female
                <input type="radio" name="Gender" id="Third-Gender" className="Gender" /> Tthird Gender              
              </span>
              <Button />
            </div>
          </div>
          <div className="link-container">
            <div className="link">
              <div className="media">
                <a href="#">
                  <img src="/Icons/f.png" alt="" />
                  Facebook
                </a>
                <a href="#">
                  <img src="/Icons/i.png" alt="" />
                  Instagram
                </a>
                <a href="#">
                  <img src="/Icons/t.png" alt="" />
                  Twitter
                </a>
                <a href="#">
                  <img src="/Icons/l.png" alt="" />
                  Linkedin
                </a>
                <a href="#">
                  <img src="/Icons/yt.png" alt="" />
                  YouTube
                </a>
                <a href="#">
                  <img src="/Icons/tu.png" alt="" />
                  Tumblr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
