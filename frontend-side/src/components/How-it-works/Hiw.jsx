import React from 'react';
import "./hiw.css";

const Hiw = () => {
  return (
    <section className="section feature" aria-labelledby="feature-label">
  <div className="container">
    <figure className="feature-banner">
      <img
        src="./assets/images/feature-banner.png"
        width="800"
        height="531"
        loading="lazy"
        alt="feature banner"
        className="w-100"
      />
    </figure>
    <div className="feature-content">
      <p className="section-subtitle" id="feautre-label">
        How it works
      </p>
      <h2 className="h2 section-title">
      How the Driver Wangu platform  works
      </h2>

      <p className="section-text">
      Reliable and easy to use, with everything you need to drive and earn when you want.
      </p>
      <ul className="feature-list">
        <li>
          <div className="feature-card">
            <div className="card-icon">
              <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Aenean quam ornare. Curabitur blandit.</span>
          </div>
        </li>
        <li>
          <div className="feature-card">
            <div className="card-icon">
              <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Nullam quis risus eget urna mollis ornare.</span>
          </div>
        </li>
        <li>
          <div className="feature-card">
            <div className="card-icon">
              <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Etiam porta euismod malesuada mollis.</span>
          </div>
        </li>
        <li>
          <div className="feature-card">
            <div className="card-icon">
              <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Vivamus sagittis lacus vel augue rutrum.</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default Hiw