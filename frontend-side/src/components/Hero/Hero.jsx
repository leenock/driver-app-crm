import React, { useEffect, useRef } from "react";
import "./hero.css";
import "./mediaquery.css";

const Hero = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const initSlider = (slider) => {
          const sliderContainer = slider.querySelector("[data-slider-container]");
          const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
          const sliderNextBtn = slider.querySelector("[data-slider-next]");
    
          let currentSlidePos = 0;
    
          const moveSliderItem = () => {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
          };
    
          const slideNext = () => {
            const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;
    
            if (slideEnd) {
              currentSlidePos = 0;
            } else {
              currentSlidePos++;
            }
    
            moveSliderItem();
          };
    
          sliderNextBtn.addEventListener("click", slideNext);
    
          const slidePrev = () => {
            if (currentSlidePos <= 0) {
              currentSlidePos = sliderContainer.childElementCount - 1;
            } else {
              currentSlidePos--;
            }
    
            moveSliderItem();
          };
    
          sliderPrevBtn.addEventListener("click", slidePrev);
    
          const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
          if (dontHaveExtraItem) {
            sliderNextBtn.style.display = "none";
            sliderPrevBtn.style.display = "none";
          }
        };
    
        const sliders = document.querySelectorAll("[data-slider]");
        sliders.forEach((slider) => initSlider(slider));
    
        return () => {
          // Cleanup code if needed
        };
      }, []);
    

    return (
        <section className="section hero has-bg-image" aria-label="home" 
          style={{ backgroundColor: "darkgoldenrod" }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 hero-title">Make money driving with Dereva wangu in Kenya.</h1>
                    <p className="hero-text">
                    Become a dereva wangu driver, set your schedule and earn money by driving!
                    </p>
                    <div className="btn-wrapper">
                        <a href="/driver-application" className="btn btn-primary">Sign up Now</a>
                        <a href="/#" className="btn btn-outline">Contact Us</a>
                    </div>
                </div>
                <div className="hero-slider" data-slider ref={sliderRef}>
                    <div className="slider-inner">
                        <ul className="slider-container" data-slider-container>
                            <li className="slider-item">
                            <figure className="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                    <img src="./assets/images/MicrosoftTeams-image-54.png" style={{ "--width": 575, "--height": 550 }} alt="" className="img-cover" />
                                </figure>
                            </li>
                            <li className="slider-item">
                                <div className="hero-card">
                                    <figure className="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                        <img src="./assets/images/hero2.jpg" width="575" height="550" alt="hero banner"
                                            className="img-cover" />
                                    </figure>
                                </div>
                            </li>
                            <li className="slider-item">
                                <figure className="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                    <img src="./assets/images/hero3.jpg" width="575" height="550" alt="" className="img-cover" />
                                </figure>
                            </li>
                        </ul>
                    </div>
                    <button className="slider-btn prev" aria-label="slide to previous" data-slider-prev>
                        <ion-icon name="arrow-back"></ion-icon>
                    </button>
                    <button className="slider-btn next" aria-label="slide to next" data-slider-next>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Hero