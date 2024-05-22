import React from "react";
import "./login.css";
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="application">
      <Header />
      <div className="registration-container">
        <div className="left-column">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
            alt="Become a Driver"
            className="signup-image"
          />
        </div>
        <div className="right-column">
          <h1 className="form-title">Dereva wangu</h1>
          <form class="input-wrapper">
            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <div className="phone-input">
                <select
                  id="country-code"
                  defaultValue="+254"
                  class="input-field-lg"
                >
                  <option value="+254">KE +254</option>
                  <option value="+256">UG +256</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  class="input-field-lg"
                  required
                />
              </div>
            </div>
            <Link to="/verification-code">
            <button type="submit-login">Continue</button>
            </Link>
          </form>
          <br />
         <p>Forgot Password ↗
         </p>
        </div>
      </div>
      
    </section>
  );
};

export default Login;
