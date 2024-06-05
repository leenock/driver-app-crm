import React from "react";
import "./login.css";
import Header from '../../components/Header/Header';
//import { Link } from "react-router-dom";
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
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  class="input-field-lg"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="Password">Password</label>
              <div className="Password-input">
                <input
                  type="password"
                  name="Pass_word"
                  placeholder="Password"
                  required
                  class="input-field-sn"
                />
              </div>
            </div>
           
            <button type="submit-login">Continue</button>
            
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
