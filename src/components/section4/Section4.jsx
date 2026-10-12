import { useState } from "react";
import "./Section4.css";

const Section4 = () => {
  const [leaping, setLeaping] = useState(false);

  return (
    <section className="section-four slide-three" aria-labelledby="slide-three-title">
      <div className="slide-three__web" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="90" />
          <circle cx="300" cy="300" r="180" />
          <circle cx="300" cy="300" r="270" />
          <path d="M300 30v540M30 300h540M109 109l382 382m0-382L109 491" />
          <path d="m300 30 68 97-68 83-68-83 68-97Zm270 270-97 68-83-68 83-68 97 68ZM300 570l-68-97 68-83 68 83-68 97ZM30 300l97-68 83 68-83 68-97-68Z" />
        </svg>
      </div>

      <div className="slide-three__layout">
        <div className="slide-three__copy">
          <div className="slide-three__closing">
            <span className="slide-three__closing-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 3 19 12l8-5-5 8 8 3-9 2 4 9-8-6-8 6 4-9-9-2 8-3-5-8 8 5 1-9Z" />
                <circle cx="16" cy="17" r="3" />
              </svg>
            </span>
            <span>THE STORY CONTINUES</span>
          </div>

          <p className="slide-three__eyebrow">
            <span />
            03 / YOUR FRIENDLY NEIGHBOR
          </p>

          <h2 id="slide-three-title" className="slide-three__title">
            THIS CITY
            <br />
            IS <span>YOURS.</span>
          </h2>

          <p className="slide-three__description">
            No spotlight. No applause. Just one more swing through the night,
            because that&apos;s what neighbors do.
          </p>

          <div className="slide-three__signature">
            <span className="slide-three__signature-line" />
            <span>WITH GREAT POWER COMES GREAT RESPONSIBILITY.</span>
          </div>

          <button
            className={`slide-three__button${leaping ? " is-leaping" : ""}`}
            type="button"
            aria-pressed={leaping}
            onClick={() => setLeaping((isLeaping) => !isLeaping)}
          >
            <span>{leaping ? "SEE YOU OUT THERE" : "TAKE THE LEAP"}</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3.5 10h13m-5-5 5 5-5 5" />
            </svg>
          </button>

          <div className="slide-three__progress" aria-label="Current slide, 3 of 3">
            <span>03</span>
            <span className="slide-three__progress-track">
              <span />
            </span>
            <span>03</span>
            <span className="slide-three__progress-caption">END OF THE BEGINNING</span>
          </div>
        </div>

        <div className={`slide-three__scene${leaping ? " is-leaping" : ""}`}>
          <div className="slide-three__dawn" aria-hidden="true" />
          <div className="slide-three__moon" aria-hidden="true" />
          <div className="slide-three__city" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          <svg
            className="slide-three__swing-line"
            viewBox="0 0 700 650"
            fill="none"
            aria-hidden="true"
          >
            <path d="M614-20C604 179 505 248 408 325s-156 160-170 312" />
          </svg>

          <svg
            className="slide-three__hero"
            viewBox="0 0 380 400"
            fill="none"
            role="img"
            aria-label="A masked hero swinging across the skyline"
          >
            <defs>
              <linearGradient id="final-mask" x1="147" y1="29" x2="227" y2="131">
                <stop stopColor="#ff5968" />
                <stop offset="1" stopColor="#a61031" />
              </linearGradient>
              <linearGradient id="final-suit" x1="113" y1="130" x2="277" y2="325">
                <stop stopColor="#ed293f" />
                <stop offset=".57" stopColor="#b01231" />
                <stop offset="1" stopColor="#131c31" />
              </linearGradient>
            </defs>
            <path
              d="M185 18c-8 27-19 51-27 71-10 24-9 47 8 58l22-13 18 15c22-13 28-35 16-57-11-22-20-47-24-74l-13 15-18-15-2 0Z"
              fill="url(#final-mask)"
              stroke="#ff9ba3"
              strokeOpacity=".47"
              strokeWidth="2.5"
            />
            <path d="m157 93 27-9-12 17-24 8 9-16Zm43-9 27 9 9 16-24-8-12-17Z" fill="#dceaff" />
            <path d="M168 143c-20 13-35 27-42 48l-15 58 29 9 32-45-3 59 50 38 51-33 2-62 31 44 26-12-18-61c-9-23-27-39-48-49l-28 20-25-17-42 11Z" fill="url(#final-suit)" stroke="#ff8390" strokeOpacity=".38" strokeWidth="2.5" />
            <path d="m166 151 29 21-11 85 34 43 35-23-8-108 24-19-38 13-25-16-40 4Z" fill="#ff7884" fillOpacity=".19" />
            <path d="m198 164 20 0 11 17-21 18-20-18 10-17Z" fill="#fb354b" stroke="#ffadb4" strokeOpacity=".74" strokeWidth="2" />
            <path d="m208 169 5 6-5 6-5-6 5-6Z" fill="#fff0f0" />
            <path d="m121 238-38-69-15-7m227 96 32-59 36-27" stroke="#ffafb7" strokeOpacity=".8" strokeWidth="2" />
            <path d="m80 168-19-10 16-5 15 8m267 9 17-17 13-2-7 17" stroke="#141c2d" strokeWidth="9" strokeLinecap="round" />
            <path d="m170 300-20 62 49 2 22-38m10-28 33 44 48-20-31-49" fill="#10182b" stroke="#b2213d" strokeWidth="3" />
            <path d="m159 146 49 34 39-32m-65 39 28 26 31-23m-55 36 28 25 29-24" stroke="#ffb4bc" strokeOpacity=".31" strokeWidth="2" />
          </svg>

          <div className="slide-three__glass-note">
            <span className="slide-three__note-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-4.4 7-11V5l-7-3-7 3v5c0 6.6 7 11 7 11Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <span>
              <strong>ALWAYS ON WATCH</strong>
              <small>New York sleeps a little safer.</small>
            </span>
            <span className="slide-three__note-live">
              <i />
              ONLINE
            </span>
          </div>

          <div className="slide-three__scene-caption">
            <span>QUEENSBORO BRIDGE</span>
            <span>4:12 AM</span>
          </div>
        </div>
      </div>

      <div className="slide-three__footer">
        <span>THE CITY IS NEVER REALLY ALONE.</span>
        <span>A FRIENDLY NEIGHBORHOOD STORY&nbsp; · &nbsp;03 / 03</span>
      </div>
    </section>
  );
};

export default Section4;
