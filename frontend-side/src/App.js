import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Landingpage from './components/Landingpage';
import Signup from './pages/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <Router>
       <div>
        <Header />
         <Routes>
         <Route path="/" element={<Landingpage />}></Route>
         <Route path="/driver-application" element={<Signup />}></Route>
        </Routes>
       </div>
       </Router>
    </div>
  );
}

export default App;
