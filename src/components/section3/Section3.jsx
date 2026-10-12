import { useState } from "react";
import "./Section3.css";

const districts = [
  {
    id: "brooklyn",
    name: "Brooklyn",
    detail: "A string of late-night break-ins near the waterfront.",
    signal: "SIGNAL DETECTED",
    className: "slide-two__node--brooklyn",
  },
  {
    id: "queens",
    name: "Queens",
    detail: "A quiet neighborhood. For now, everything looks clear.",
    signal: "ALL CLEAR",
    className: "slide-two__node--queens",
  },
  {
    id: "manhattan",
    name: "Manhattan",
    detail: "A fast-moving alert just lit up the Midtown grid.",
    signal: "PRIORITY ALERT",
    className: "slide-two__node--manhattan",
  },
];

const Section3 = () => {
  const [activeDistrict, setActiveDistrict] = useState(districts[0]);

  return (
    <section id="city-signals" className="section-three slide-two" aria-labelledby="slide-two-title">
      <div className="slide-two__halo" aria-hidden="true" />

      <div className="slide-two__layout">
        <div className="slide-two__copy">
          <p className="slide-two__eyebrow">
            <span className="slide-two__live-dot" />
            03 / THE CITY PULSE
          </p>
          <h2 id="slide-two-title" className="slide-two__title">
            EVERY BLOCK
            <br />
            IS A <span>STORY.</span>
          </h2>
          <p className="slide-two__description">
            The skyline looks peaceful from up here. The signals say
            otherwise. Keep your eyes open and your senses sharper.
          </p>

          <div className="slide-two__mission">
            <span className="slide-two__mission-index">FIELD NOTE&nbsp; 01</span>
            <p>
              Trouble never sends a calendar invite. It just takes one good
              neighbor to show up.
            </p>
          </div>

          <div className="slide-two__progress" aria-label="Current slide, 3 of 5">
            <span className="slide-two__progress-active">03</span>
            <span className="slide-two__progress-line">
              <span />
            </span>
            <span>05</span>
            <span className="slide-two__progress-caption">THE CITY PULSE</span>
          </div>
        </div>

        <div className="slide-two__map-wrap">
          <div className="slide-two__map-heading">
            <div>
              <span className="slide-two__map-overline">LIVE CITY GRID</span>
              <h3>Neighborhood watch</h3>
            </div>
            <span className="slide-two__map-status">
              <span className="slide-two__live-dot" />
              LIVE
            </span>
          </div>

          <div className="slide-two__map">
            <div className="slide-two__map-glow" aria-hidden="true" />
            <svg
              className="slide-two__streets"
              viewBox="0 0 700 560"
              fill="none"
              aria-hidden="true"
            >
              <path d="m-30 84 238 78 191-56 332 92M-10 194l201 68 177-49 358 94M-20 318l202-31 178 78 371-58M6 434l201-68 192 61 362-78" />
              <path d="m86-30 48 192-47 148 75 277M218-21l30 183-46 113 64 284M356-28l-18 146 60 128-15 337M498-40l-49 152 60 118-36 325M630-31l-63 215 26 111-69 258" />
              <path d="m30 514 178-148 197 61 164-157 147 40M22 55l185 107 40 101 135 3 111-146 201 78" />
              <path className="slide-two__route" d="m80 397 113-135 158 31 97-153 119 78" />
              <circle cx="193" cy="262" r="7" />
              <circle cx="351" cy="293" r="7" />
              <circle cx="448" cy="140" r="7" />
              <circle cx="567" cy="218" r="7" />
            </svg>

            <span className="slide-two__map-label slide-two__map-label--harlem">HARLEM</span>
            <span className="slide-two__map-label slide-two__map-label--midtown">MIDTOWN</span>
            <span className="slide-two__map-label slide-two__map-label--east">EAST RIVER</span>
            <span className="slide-two__map-label slide-two__map-label--brooklyn">BROOKLYN</span>
            <span className="slide-two__map-label slide-two__map-label--queens">QUEENS</span>

            {districts.map((district) => (
              <button
                key={district.id}
                type="button"
                className={`slide-two__node ${district.className}${activeDistrict.id === district.id ? " is-active" : ""}`}
                aria-label={`Show ${district.name} city signal`}
                aria-pressed={activeDistrict.id === district.id}
                onClick={() => setActiveDistrict(district)}
              >
                <span />
              </button>
            ))}

            <div className="slide-two__map-scale" aria-hidden="true">
              <span />
              <span>2 KM</span>
            </div>
          </div>

          <div className="slide-two__intel">
            <div className="slide-two__intel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 3.5 19h17L12 3Z" />
                <path d="M12 9v4m0 3h.01" />
              </svg>
            </div>
            <div className="slide-two__intel-copy" aria-live="polite">
              <span className="slide-two__intel-label">{activeDistrict.signal}</span>
              <h4>{activeDistrict.name}</h4>
              <p>{activeDistrict.detail}</p>
            </div>
            <span className="slide-two__intel-signal" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </div>

      <div className="slide-two__footer">
        <span>KEEP YOUR EYES ON THE STREETS</span>
        <span>NEW YORK CITY&nbsp; / &nbsp;00:47 AM</span>
      </div>
    </section>
  );
};

export default Section3;
