import React from "react";

import "./style.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2 className="footer-heading">Have a Questions?</h2>
        <div className="block-23 mb-3">
          <ul>
            <li>
              <a href="#">
                <span className="icon ion-ios-pin"></span>
                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-call"></span>
                <span className="text">+2 392 3929 210</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-send"></span>
                <span className="text">info@yourdomain.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <img src="/img/tiwt.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <div className="footer-section news">
        <h2>Recent Job Postings</h2>
        <div className="news-item">
          <img src="/img/Shutterstock_749265139-1.png" alt="News 1" />
          <a href="#">Even the all-powerful Pointing has no control about</a>
          <p>Feb 16, 2025 | Admin |</p>
        </div>
        <div className="news-item">
          <img src="/img/1692257440924.jpeg" alt="News 2" />
          <a href="#">Even the all-powerful Pointing has no control about</a>
          <p>Feb 16, 2025 | Admin |</p>
        </div>
      </div>

      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2025 All rights reserved ❤️ by <a href="#">Teckleap</a></p>
      </div>
    </footer>
  );
};

export default Footer;
