import React from "react";
import "./testmony.css";
import "./mediaquery.css";

const Testmony = () => {
  return (
    <section class="section project" aria-labelledby="project-label">
      <div class="container">
        <h2 class="h2 section-title">
         what our drivers have to say.
        </h2>
        <ul class="grid-list">
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style={{ "--width": "560px", "--height": "350px" }}
              >
                <img
                  src="./assets/images/hero1.jpg"
                  width="560"
                  height="350"
                  loading="lazy"
                  alt="Ligula tristique quis risus"
                  class="img-cover"
                />
              </figure>
              <div class="card-content">
                <h3 class="h3">
                  <a href="/#" class="card-title">
                    Ligula tristique quis risus
                  </a>
                </h3>
                <p class="card-text">
                  Mauris convallis non ligula non interdum. Gravida vulputate
                  convallis tempus vestibulum cras imperdiet nun eu dolor.
                </p>
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <time class="meta-text" datetime="2022-04-14">
                      14 Apr 2022
                    </time>
                  </li>
                  <li class="card-meta-item">
                    <ion-icon
                      name="document-text-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span class="meta-text">Best Networking</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style={{ "--width": "560px", "--height": "350px" }}>
                <img
                  src="./assets/images/hero2.jpg"
                  width="560"
                  height="350"
                  loading="lazy"
                  alt="Nullam id dolor elit id nibh"
                  class="img-cover"
                />
              </figure>

              <div class="card-content">
                <h3 class="h3">
                  <a href="/#" class="card-title">
                    Nullam id dolor elit id nibh
                  </a>
                </h3>
                <p class="card-text">
                  Mauris convallis non ligula non interdum. Gravida vulputate
                  convallis tempus vestibulum cras imperdiet nun eu dolor.
                </p>
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <time class="meta-text" datetime="2022-03-29">
                      29 Mar 2022
                    </time>
                  </li>
                  <li class="card-meta-item">
                    <ion-icon
                      name="document-text-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span class="meta-text">I earn More</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="project-card">
              <figure
                class="card-banner img-holder"
                style={{ "--width": "560px", "--height": "350px" }}
              >
                <img
                  src="./assets/images/hero3.jpg"
                  width="560"
                  height="350"
                  loading="lazy"
                  alt="Ultricies fusce porta elit"
                  class="img-cover"
                />
              </figure>

              <div class="card-content">
                <h3 class="h3">
                  <a href="/#" class="card-title">
                    Ultricies fusce porta elit
                  </a>
                </h3>

                <p class="card-text">
                  Mauris convallis non ligula non interdum. Gravida vulputate
                  convallis tempus vestibulum cras imperdiet nun eu dolor.
                </p>
                <ul class="card-meta-list">
                  <li class="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <time class="meta-text" datetime="2022-02-26">
                      26 Feb 2022
                    </time>
                  </li>
                  <li class="card-meta-item">
                    <ion-icon
                      name="document-text-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span class="meta-text">Best Experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testmony;
