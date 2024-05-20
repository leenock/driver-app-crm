import React from "react";
import "./otp.css";

const Otp = () => {
  return (
    <section className="application">
      <div className="registration-container">
        <div className="left-column">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
            alt="Become a Driver"
            className="signup-image"
          />
        </div>
        <div className="right-column">
          <h1 className="form-title">Login to your account</h1>
          <form class="input-wrapper">
            <div className="form-row">
              <label htmlFor="phone">Please enter 6-digit code:</label>
              <div className="phone-input">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your verification code"
                  class="input-field"
                  required
                />
              </div>
            </div>
            <button type="submit2">Login</button>
          </form>
          <br />
         <p>Did not get the code? ↗
         </p>
        </div>
      </div>
      
    </section>
  );
};

export default Otp;
