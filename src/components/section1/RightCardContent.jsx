import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="section-one__card-content absolute inset-0 flex flex-col justify-between p-5 text-white md:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="section-one__card-number">0{props.id + 1}</span>
        <span className="section-one__card-category">
          <i className="ri-sparkling-2-line" aria-hidden="true" />
          Audience
        </span>
      </div>

      <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
        <p className="section-one__card-description">
          Built around real financial needs, behaviours and everyday goals.
        </p>

        <div className="flex items-center justify-between gap-3">
          <button
            className="section-one__card-tag"
          >
            {props.tag}
          </button>
          <span className="section-one__card-arrow" aria-hidden="true">
            <i className="ri-arrow-right-up-line" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
