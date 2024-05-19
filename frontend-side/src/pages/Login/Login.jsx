import React from "react";
import "./login.css";

const Login = () => {
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
          <h1 className="form-title">Dereva wangu</h1>
          <form class="input-wrapper">
            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <div className="phone-input">
                <select
                  id="country-code"
                  defaultValue="+254"
                  class="input-field"
                >
                  <option value="+254">KE +254</option>
                  <option value="+256">UG +256</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  class="input-field"
                  required
                />
              </div>
            </div>
            <button type="submit2">Continue</button>
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
