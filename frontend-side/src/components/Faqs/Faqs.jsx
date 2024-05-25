import React, { useState } from "react";
import "./faqs.css";

const Faqs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      title: "Where can I drive within my city?",
      content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
      id: 2,
      title: "How do I sign up to become a driver?",
      content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
      id: 3,
      title: "What are the requirements to become a driver?",
      content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
      id: 4,
      title: "Are there any bonuses or incentives for drivers?",
      content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    }
    ,
    {
      id: 5,
      title: "What are the safety measures for drivers?",
      content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    }
    // Add more FAQs here
  ];

  return (
    <section id="faqs" className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_b3991183018a17fc952e93a7be711695.webp"
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
            {faqs.map((faq) => (
              <li className="about-item" key={faq.id}>
                <div
                  className={`accordion-card ${expandedId === faq.id ? "expanded" : ""}`}
                  data-accordion
                >
                  <h3 className="card-title">
                    <button
                      className="accordion-btn"
                      data-accordion-btn
                      onClick={() => toggleAccordion(faq.id)}
                    >
                      <ion-icon
                        name={`chevron-${expandedId === faq.id ? "down" : "down"}-outline`}
                        aria-hidden="true"
                        className={expandedId === faq.id ? "up" : "up"}
                      ></ion-icon>
                      <span className="span h5">{faq.title}</span>
                    </button>
                  </h3>
                  {expandedId === faq.id && (
                    <p className="accordion-content">
                      {faq.content}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
