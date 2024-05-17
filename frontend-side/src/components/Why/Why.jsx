import React from "react";
import "./why.css";

const Why = () => {
  return (
    <section className="section service" aria-labelledby="service-label">
      <div className="container">
        <h2 style={{textAlign: "center"}} className="h2 section-title">
        Why become a Dereva Wangu driver?
        </h2>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </div>
              <h3 className="h4 card-title">Flexible Working Hours</h3>
              <p className="card-text">
              Enjoy the freedom to work whenever it suits your schedule. Whether you prefer driving early mornings, late nights, or just a few hours during the day, you can choose the hours that best fit your lifestyle.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="shield-checkmark-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">Competitive Earnings</h3>
              <p className="card-text">
              Earn competitive rates per ride, allowing you to make a substantial income. With our transparent payment system, you’ll always know how much you’re earning and can track your progress easily.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="cloud-download-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">Incentives and Bonuses</h3>
              <p className="card-text">
              Boost your earnings with various incentive programs and bonuses. From peak hour bonuses to referral rewards, there are multiple ways to increase your income beyond regular fares.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="pie-chart-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">User-Friendly App</h3>
              <p className="card-text">
              Manage your rides effortlessly with our user-friendly app. The app is designed to be intuitive and easy to navigate, making your driving experience as smooth as possible.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Why;
