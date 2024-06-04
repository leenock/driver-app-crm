import React, { useState } from "react";
import "./signup.css";
import Header from "../../components/Header/Header";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../utils/validations/validation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("Nairobi");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // driver-reg validation
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Phone number must be numeric and 10 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/drivers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phoneNumber,
          city,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          "Registration successful! Use your Email and password to Login"
        );
        setEmail("");
        setPhoneNumber("");
        setCity("Nairobi");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(data.msg);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

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
          <form className="input-wrapper" onSubmit={handleSubmit}>
            {error && (
              <div className="alert-box error">
                <span className="icon error-icon">⚠️</span>
                <p>{error}</p>
              </div>
            )}
            {success && (
              <div className="alert-box success">
                <span className="icon success-icon">✔️</span>
                <p>{success}</p>
              </div>
            )}
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <div className="email-input">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  className="input-field-sn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  autoComplete="tel-national"
                  className="input-field-sn"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="city">City</label>
              <div className="custom-dropdown">
                <select
                  id="city"
                  className="input-field-sn"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Embu">Embu</option>
                  <option value="Kisumu">Kisumu</option>
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
                  className="input-field-sn"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  autoComplete="new-password"
                  className="input-field-sn"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit2">Sign up as a Driver</button>
          </form>
          <br />
          <p>
            By signing up, you agree to our Terms of Service and Privacy policy,
            Already have an account? Log in ↗
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
