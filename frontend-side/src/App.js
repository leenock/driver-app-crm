import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './components/Header/Header';
import Landingpage from "./components/Landingpage";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Otp from "./pages/components/Otp/Otp";
import Dashboard from "./pages/Dashboard/Dashboard";


// log out 
// Token and User Authentications ---  Tommorow 

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Landingpage />}></Route>
            <Route path="/driver-application" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/verification-code" element={<Otp />}></Route>
            <Route path="/driver-dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
