import { useState } from "react";
import "./Section2.css";

const Section2 = () => {
  const [suitedUp, setSuitedUp] = useState(false);

  return (
    <section className="section-two slide-one" aria-labelledby="slide-one-title">
      <div className="slide-one__web" aria-hidden="true">
        <svg viewBox="0 0 720 720" fill="none">
          <circle cx="360" cy="360" r="115" />
          <circle cx="360" cy="360" r="230" />
          <circle cx="360" cy="360" r="345" />
          <path d="M360 15v690M15 360h690M116 116l488 488m0-488L116 604" />
          <path d="m360 15 92 115-92 100-92-100 92-115Zm345 345-115 92-100-92 100-92 115 92ZM360 705l-92-115 92-100 92 100-92 115ZM15 360l115-92 100 92-100 92L15 360Z" />
        </svg>
      </div>

      <div className="slide-one__grain" aria-hidden="true" />

      <div className="slide-one__layout">
        <div className="slide-one__copy">
          <div className="slide-one__topline">
            <span className="slide-one__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 3 19 12l8-5-5 8 8 3-9 2 4 9-8-6-8 6 4-9-9-2 8-3-5-8 8 5 1-9Z" />
                <circle cx="16" cy="17" r="3" />
              </svg>
            </span>
            <span>NEW YORK CITY</span>
            <span className="slide-one__topline-divider" />
            <span>AFTER DARK</span>
          </div>

          <p className="slide-one__eyebrow">
            <span className="slide-one__pulse" />
            THE CITY NEEDS A HERO
          </p>

          <h1 id="slide-one-title" className="slide-one__title">
            THE NIGHT
            <br />
            IS <span>YOUNG.</span>
          </h1>

          <p className="slide-one__description">
            One city. A thousand rooftops. Someone is always watching over the
            streets below.
          </p>

          <div className="slide-one__actions">
            <button
              className={`slide-one__button${suitedUp ? " is-suited" : ""}`}
              type="button"
              aria-pressed={suitedUp}
              onClick={() => setSuitedUp((isSuited) => !isSuited)}
            >
              <span>{suitedUp ? "READY FOR THE DROP" : "SUIT UP"}</span>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3.5 10h13m-5-5 5 5-5 5" />
              </svg>
            </button>
            <span className="slide-one__hint">YOUR CITY. YOUR CALL.</span>
          </div>

          <div className="slide-one__status" aria-label="Current slide, 2 of 5">
            <span className="slide-one__status-current">02</span>
            <span className="slide-one__status-track">
              <span />
            </span>
            <span>05</span>
            <span className="slide-one__status-label">ORIGIN STORY</span>
          </div>
        </div>

        <div
          className={`slide-one__scene${suitedUp ? " is-suited" : ""}`}
          aria-label="A masked hero watching over a New York rooftop"
          role="img"
        >
          <div className="slide-one__moon" />
          <div className="slide-one__web-line slide-one__web-line--left" />
          <div className="slide-one__web-line slide-one__web-line--right" />

          <div className="slide-one__city" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          <svg className="slide-one__hero" viewBox="0 0 460 520" fill="none">
            <defs>
              <linearGradient id="suit" x1="174" y1="188" x2="322" y2="466">
                <stop stopColor="#e52338" />
                <stop offset=".56" stopColor="#a40e29" />
                <stop offset="1" stopColor="#10182a" />
              </linearGradient>
              <linearGradient id="suitHighlight" x1="190" y1="240" x2="314" y2="434">
                <stop stopColor="#ff5361" stopOpacity=".7" />
                <stop offset="1" stopColor="#193d69" stopOpacity=".1" />
              </linearGradient>
              <linearGradient id="mask" x1="191" y1="50" x2="277" y2="184">
                <stop stopColor="#ef3444" />
                <stop offset="1" stopColor="#8d1027" />
              </linearGradient>
            </defs>
            <path
              d="M226 10c-5 43-17 80-30 112-9 23-17 44-17 66 0 22 13 36 39 43l14-26 13 24c33-6 50-22 48-47-2-24-16-45-25-68-12-31-18-66-18-104l-24 26-24-26Z"
              fill="url(#mask)"
              stroke="#ff929a"
              strokeOpacity=".42"
              strokeWidth="3"
            />
            <path d="m190 151 35-11-13 22-30 10 8-21Zm57-11 35 11 8 21-30-10-13-22Z" fill="#d7e9ff" />
            <path d="m213 154 12-7-6 9-11 4 5-6Zm40 0-12-7 6 9 11 4-5-6Z" fill="#162039" />
            <path
              d="M196 223c-18 12-39 24-57 44l-50 76 24 17 67-57-24 95 25 66 112 2 24-70-26-94 67 60 22-20-50-79c-17-21-38-35-59-44l-25 25-25-21Z"
              fill="url(#suit)"
              stroke="#ff7180"
              strokeOpacity=".35"
              strokeWidth="3"
            />
            <path d="m196 229 29 19-34 117 38 91h31l37-91-36-116 27-21-41 20-25-17-26 19Z" fill="url(#suitHighlight)" />
            <path d="m230 248 24 0 12 20-24 20-24-20 12-20Z" fill="#f52b43" stroke="#ff9aa2" strokeOpacity=".7" strokeWidth="2" />
            <path d="m242 254 7 7-7 7-7-7 7-7Z" fill="#ffe4e5" />
            <path d="m111 336-21 7 9 12 18-8m242-9 20 10-10 11-17-10" stroke="#10182a" strokeWidth="10" strokeLinecap="round" />
            <path d="m202 464-13 39h46l12-39m19 0 13 39h45l-14-40" fill="#10182a" stroke="#9c2035" strokeWidth="3" />
            <path d="m205 228 37 45 36-45m-64 36 28 31 29-31m-59 59 30 31 31-31m-50 62 19 20 20-20" stroke="#ff9aa2" strokeOpacity=".35" strokeWidth="2" />
          </svg>

          <div className="slide-one__glass-card">
            <span className="slide-one__card-label">NEIGHBORHOOD WATCH</span>
            <div className="slide-one__card-location">
              <span className="slide-one__location-dot" />
              <span>QUEENS, NEW YORK</span>
            </div>
            <span className="slide-one__card-coordinate">40°43&apos; N&nbsp; 73°47&apos; W</span>
          </div>

          <div className="slide-one__scene-index" aria-hidden="true">
            <span>NYC</span>
            <span>40.7128° N</span>
          </div>
        </div>
      </div>

      <div className="slide-one__bottomline">
        <span>AN ORIGINAL WEB-SLINGER STORY</span>
        <span className="slide-one__bottomline-right">BROOKLYN · MANHATTAN · QUEENS</span>
      </div>
    </section>
  );
};

export default Section2;
