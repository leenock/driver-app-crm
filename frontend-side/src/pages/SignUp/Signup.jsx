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
              <label htmlFor="phone">PhoneNumber</label>
              <div className="phone-input">
               
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
                  <option value="Mombasa">Mombasa</option>
                  <option value="Embu">Embu</option>
                  <option value="Kisumu">Kisumu</option>
                  {/* Add more cities as needed */}
                </select>
                <div className="arrow-down"></div>
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
            <div className="form-row">
            <label htmlFor="Password">Confirm Password</label>
            <div className="Password-input">
            <input
                  type="password"
                  name="confirm_Pass_word"
                  placeholder="Confirm Password"
                  required
                  class="input-field-sn"
                />
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
