import React from "react";
import { useLocation } from "react-router-dom";
import "./main.css";
import hello from "../../../assets/images/hello.svg";

const Main = () => {
  const location = useLocation();
  const email = location.state?.email || "";
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="" />
          <div className="main__greeting">
            <h2>Welcome-back {email}</h2>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Trips</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Driving time</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-user-o fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of customers</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Ratings</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Nairobi, Kenya</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Nairobi, Kenya</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Gros</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Ratings</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
