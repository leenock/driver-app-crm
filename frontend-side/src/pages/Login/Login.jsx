import React, { useState } from "react";
import "./login.css";
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';


//import { Link } from "react-router-dom";
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate  = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        navigate('/driver-dashboard'); // Redirect to dashboard
      } else {
        setError(data.msg);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

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
          <h1 className="form-title">Dereva Wangu</h1>
          <form className="input-wrapper" onSubmit={handleSubmit}>
            {error && <div className="alert-box error">{error}</div>}
            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <div className="phone-input">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  className="input-field-lg"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  autoComplete="tel-national"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </div>
            <button type="submit2">Continue</button>
          </form>
          <br />
          <p>Forgot Password ↗</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
