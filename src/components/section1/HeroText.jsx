import React from "react";

const HeroText = () => {
  return (
    <div className="section-one__hero w-full max-w-xl p-1 md:p-0">
      <div className="section-one__eyebrow">
        <span className="section-one__eyebrow-index">01</span>
        <span className="section-one__eyebrow-rule" />
        Target audience
      </div>

      <h1 className="section-one__headline">
        Find your
        <br />
        <span>next best</span>
        <br />
        customer.
      </h1>

      <p className="section-one__description">
        A clearer picture of the people behind the numbers. Discover meaningful
        segments and shape banking experiences that feel personal.
      </p>

      <div className="section-one__metrics" aria-label="Audience overview">
        <div><strong>03</strong><span>Core segments</span></div>
        <span className="section-one__metric-divider" />
        <div><strong>360°</strong><span>Customer view</span></div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
        <a href="#segments" className="section-one__primary-action">
          Explore segments
          <i className="ri-arrow-right-up-line" aria-hidden="true" />
        </a>
        <span className="section-one__trust-note">
          <i className="ri-shield-check-line" aria-hidden="true" />
          Insight-led. People-first.
        </span>
      </div>
    </div>
  );
};

export default HeroText;
