import React from "react";

const Navbar = () => {
  return (
    <nav className="section-one__nav">
      <div className="section-one__brand">
        <span className="section-one__brand-mark" aria-hidden="true">
          <span />
        </span>
        <div>
          <p className="section-one__brand-name">ATLAS</p>
          <p className="section-one__brand-caption">Audience intelligence</p>
        </div>
      </div>

      <span className="section-one__nav-chip">
        <span className="section-one__live-dot" />
        Digital banking platform
      </span>
    </nav>
  );
};

export default Navbar;
