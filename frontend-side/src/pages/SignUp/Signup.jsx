import React from "react";
import "./signup.css";
import Header from '../../components/Header/Header';

const Signup = () => {
  return (
    <section className="application">
       <Header />
      <div className="registration-container">
        <div className="left-column">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/secure-login-and-password-7484843-6148085.png?f=webp"
            alt="Become a Driver"
            className="signup-image"
          />
        </div>
        <div className="right-column">
          <h1 className="form-title">Become a Driver</h1>
          <form class="input-wrapper">
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <div className="email-input">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Address"
                  required
                  class="input-field-sn"
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone number</label>
              <div className="phone-input">
                <select
                  id="country-code"
                  defaultValue="+254"
                  class="input-field-sn"
                >
                  <option value="+254">KE +254</option>
                  <option value="+256">UG +256</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Mobile number"
                  class="input-field-sn"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="city">City</label>
              <div className="custom-dropdown">
                <select id="city" defaultValue="Nairobi" class="input-field-sn">
                  <option value="Nairobi">Nairobi</option>
                  {/* Add more cities as needed */}
                </select>
                <div className="arrow-down"></div>
              </div>
            </div>
            <button type="submit2">Sign up as a Driver</button>
          </form>
          <br />
         <p>By signing up, you agree to our Terms of Service and Privacy policy,
         Already have an account? Log in ↗
         </p>
        </div>
      </div>
      
    </section>
  );
};

export default Signup;
