import React from "react";
import "./footer.css";
import "./mediaquery.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid-list">
        <div class="footer-brand">
          <a href="/" class="logo">
            <img
              src="./assets/images/light.png"
              width="74"
              height="24"
              alt="Leenocks"
            />
          </a>
          <p class="footer-text">
            &copy; 2024 codewithleenock. <br /> All rights reserved.
          </p>
          <ul class="social-list">
            <li>
              <a href="/#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" class="social-link">
                <ion-icon name="logo-dribbble"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <ul class="footer-list">
          <li>
            <p class="h4 footer-list-title">Get in Touch</p>
          </li>
          <li>
            <address class="footer-text">
              Moi Avenue Wing A Bazaar plaza
            </address>
          </li>
          <li>
            <a href="mailto:info@email.com" class="footer-link">
              info@email.com
            </a>
          </li>
          <li>
            <a href="tel:25478900876" class="footer-link">
              254 (07) 000 00 00
            </a>
          </li>
        </ul>
        <ul class="footer-list">
          <li>
            <p class="h4 footer-list-title">Learn More</p>
          </li>
          <li>
            <a href="/#" class="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/#" class="footer-link">
              Our Story
            </a>
          </li>
          <li>
            <a href="/#" class="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/#" class="footer-link">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="/#" class="footer-link">
              Privacy Policy
            </a>
          </li>
        </ul>
        <div class="footer-list">
          <p class="h4 footer-list-title">Our Newsletter</p>
          <p class="footer-text">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>
          <form action="" class="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              class="input-field"
            />

            <button type="submit" class="submit-btn">
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
