import React from "react";
import "./adminlogin.css";

const Administration = () => {
  return (
    <section className="application">
      <div className="registration-container">
        <div className="left-column">
          <img
            src="https://images.unsplash.com/photo-1573496005746-6dff81c990a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Become a Driver"
            className="signup-image"
          />
        </div>
        <div className="right-column">
          <h1 className="form-title">Administrative Login</h1>
          <form className="input-wrapper">
            <div className="form-row">
              <label htmlFor="phone">UserName</label>
              <div className="phone-input">
                <input
                  type="tel"
                  id="Username"
                  placeholder="User Name"
                  className="input-field-lg"
                  required
                  autoComplete="UserName"
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
                  className="input-field-sn"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <button type="submit2">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Administration;
