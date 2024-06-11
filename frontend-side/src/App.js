import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './components/Header/Header';
import Landingpage from "./components/Landingpage";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Otp from "./pages/components/Otp/Otp";
import Dashboard from "./pages/Dashboard/Dashboard";

import Auth from "./auth/Auth";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/driver-application" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verification-code" element={<Otp />} />
            <Route
              path="/driver-dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
