import React from "react";
import './Footer.css'; // You can style this according to your preference

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            At Bookhub, we help readers discover new and exciting books
            from a wide range of genres. Join our community and start exploring
            today!
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/rohan.chandra.940641" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f">Facebook</i>
            </a>
            <a href="https://x.com/RohanCh08372289" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="https://www.instagram.com/rohanchandra2003/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BookHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
