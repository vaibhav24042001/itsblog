// Footer.js

import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              doloribus quisquam laudantium quaerat rerum aspernatur id quis
              minus beatae, labore animi blanditiis odio voluptatibus,
              perferendis delectus? Aspernatur velit nobis quas.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <h3>+91-XXXXX-XXXXX</h3>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Our Blog . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
