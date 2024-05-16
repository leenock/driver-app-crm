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
              <h3 className="h4 card-title">Network</h3>
              <p className="card-text">
               meet high end clients (VVIPs) and build your own business
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
              <h3 className="h4 card-title">Drive and earn when you like</h3>
              <p className="card-text">
              Better Days planning
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
              <h3 className="h4 card-title">A reliable source of income</h3>
              <p className="card-text">
              No related vehicle expenses
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
              <h3 className="h4 card-title">Market Research</h3>
              <p className="card-text">
              A professional work environment
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Why;
