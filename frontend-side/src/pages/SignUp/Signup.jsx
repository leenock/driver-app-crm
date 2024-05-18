import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <section className="application">
      <div className="registration-container">
        <h1 className="form-title">Application Form</h1>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Country" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Country" required />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Why do you want to join?"
              required
            ></textarea>
          </div>
          <button type="submit1">Submit Application</button>
        </form>
        <div className="terms-conditions">
          <h3>Terms and Conditions</h3>
          <p>
            Please ensure that all details are filled out correctly. Incomplete
            or incorrect information may lead to disqualification.
          </p>
          <ul>
            <li>1. All fields marked as required must be completed.</li>
            <li>2. Provide accurate and up-to-date information.</li>
            <li>
              3. Any discrepancies in the provided information can result in
              disqualification.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Signup;
