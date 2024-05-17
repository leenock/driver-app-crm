import "./faqs.css";
const Faqs = () => {
  return (
    <section className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <img
            src="./assets/images/about-banner.png"
            width="800"
            height="580"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle" id="about-label">
           FAQS?
          </p>

          <h2 className="h2 section-title">
          Frequently asked questions
          </h2>
          <ul>
            <li className="about-item">
              <div className="accordion-card" data-accordion>
                <h3 className="card-title">
                  <button className="accordion-btn" data-accordion-btn>
                    <ion-icon
                      name="chevron-down-outline"
                      aria-hidden="true"
                      className="down"
                    ></ion-icon>

                    <span className="span h5">Top-Notch Support</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
                </p>
              </div>
            </li>

            <li className="about-item">
              <div className="accordion-card" data-accordion>
                <h3 className="card-title">
                  <button className="accordion-btn" data-accordion-btn>
                    <ion-icon
                      name="chevron-down-outline"
                      aria-hidden="true"
                      className="down"
                    ></ion-icon>

                    <spna className="span h5">Exclusive Assets</spna>
                  </button>
                </h3>

                <p className="accordion-content">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
