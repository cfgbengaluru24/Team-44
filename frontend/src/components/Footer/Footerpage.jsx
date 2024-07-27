import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footerpage = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Joining the Dots (JTD) foundation is a not for profit organisation
            registered under the Govt. Of India in Jan 2015. Team JTD is a group
            of like-minded individuals who have come together to make a
            difference and contribute in the field of rural education. At JTD we
            want to prevent students from discontinuing their education due to
            socio-economic factors.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Joining the Dots</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Test</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9417296338</li>
            <li>contact@findingDots.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copywright">
        Copywright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footerpage;
