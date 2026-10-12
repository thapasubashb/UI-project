import { useState } from "react";
import "./Section1.css";

const Section1 = () => {
  const [signalOn, setSignalOn] = useState(false);

  return (
    <section id="top" className="section-one opening-slide" aria-labelledby="opening-title">
      <div className="opening-slide__web" aria-hidden="true">
        <svg viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="110" />
          <circle cx="350" cy="350" r="220" />
          <circle cx="350" cy="350" r="330" />
          <path d="M350 20v660M20 350h660M117 117l466 466m0-466L117 583" />
          <path d="m350 20 82 106-82 104-82-104 82-106Zm330 330-106 82-104-82 104-82 106 82ZM350 680l-82-106 82-104 82 104-82 106ZM20 350l106-82 104 82-104 82-106-82Z" />
        </svg>
      </div>

      <div className="opening-slide__layout">
        <div className="opening-slide__copy">
          <nav className="opening-slide__nav" aria-label="Main">
            <a className="opening-slide__brand" href="#top" aria-label="Nightwatch home">
              <span className="opening-slide__brand-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3 19 12l8-5-5 8 8 3-9 2 4 9-8-6-8 6 4-9-9-2 8-3-5-8 8 5 1-9Z" />
                  <circle cx="16" cy="17" r="3" />
                </svg>
              </span>
              <span>
                <strong>NIGHTWATCH</strong>
                <small>NEW YORK CITY</small>
              </span>
            </a>
            <span className="opening-slide__nav-chip">
              <i />
              CITY-WIDE WATCH
            </span>
          </nav>

          <p className="opening-slide__eyebrow">
            <span className="opening-slide__eyebrow-index">01</span>
            <span className="opening-slide__eyebrow-rule" />
            EVERY CITY HAS A GUARDIAN
          </p>

          <h1 id="opening-title" className="opening-slide__title">
            FRIENDLY
            <br />
            <span>NEIGHBORHOOD</span>
            <br />
            HERO.
          </h1>

          <p className="opening-slide__description">
            By day, just another face in the crowd. By night, a watchful
            presence above the streets. This city is never on its own.
          </p>

          <div className="opening-slide__actions">
            <a className="opening-slide__button" href="#city-signals">
              <span>EXPLORE THE CITY</span>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3.5 10h13m-5-5 5 5-5 5" />
              </svg>
            </a>
            <span className="opening-slide__action-note">
              FIVE BOROUGHS. ONE PROMISE.
            </span>
          </div>

          <div className="opening-slide__progress" aria-label="Current slide, 1 of 5">
            <span>01</span>
            <span className="opening-slide__progress-track">
              <span />
            </span>
            <span>05</span>
            <span className="opening-slide__progress-caption">THE BEGINNING</span>
          </div>
        </div>

        <div className={`opening-slide__scene${signalOn ? " is-alert" : ""}`}>
          <div className="opening-slide__moon" aria-hidden="true" />
          <div className="opening-slide__stars" aria-hidden="true" />
          <div className="opening-slide__city" aria-hidden="true">
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
            className="opening-slide__hero"
            viewBox="0 0 400 520"
            fill="none"
            role="img"
            aria-label="An original masked rooftop hero watching over the city"
          >
            <defs>
              <linearGradient id="opening-mask" x1="147" y1="35" x2="248" y2="200">
                <stop stopColor="#fa4c5e" />
                <stop offset="1" stopColor="#97102d" />
              </linearGradient>
              <linearGradient id="opening-suit" x1="109" y1="194" x2="301" y2="467">
                <stop stopColor="#f0384e" />
                <stop offset=".56" stopColor="#aa102d" />
                <stop offset="1" stopColor="#10192d" />
              </linearGradient>
              <linearGradient id="opening-reflection" x1="150" y1="224" x2="279" y2="421">
                <stop stopColor="#ff8b94" stopOpacity=".55" />
                <stop offset="1" stopColor="#24406a" stopOpacity=".08" />
              </linearGradient>
            </defs>
            <path d="M151 195c-20-16-26-45-15-72l29-72c12-29 38-43 67-36l31 8c25 7 41 29 38 55l-8 70c-4 33-30 56-62 59l-80-12Z" fill="url(#opening-mask)" stroke="#ff9ba4" strokeOpacity=".45" strokeWidth="3" />
            <path d="m145 127 42-11-15 24-36 12 9-25Zm82-11 42 11 9 25-36-12-15-24Z" fill="#deebff" />
            <path d="m170 122 17-5-11 12-13 4 7-11Zm32-5 17 5 7 11-13-4-11-12Z" fill="#15223c" />
            <path d="M126 199c-32 12-52 37-64 73L22 387l40 27 77-107-16 118 78 48 88-39-12-133 68 101 39-25-48-121c-14-35-43-62-78-73l-49 31-45-20-56 5Z" fill="url(#opening-suit)" stroke="#ff8490" strokeOpacity=".4" strokeWidth="3" />
            <path d="m140 210 45 26-30 101 50 91 50-31 2-122 34-55-62 31-42-28-47-13Z" fill="url(#opening-reflection)" />
            <path d="m187 257 31-13 31 24-27 32-37-21 2-22Z" fill="#ee3048" stroke="#ffabb2" strokeOpacity=".72" strokeWidth="2" />
            <path d="m207 255 12 9-8 10-13-5 9-14Z" fill="#ffe8e9" />
            <path d="m73 388-27-12m318-5 29-13" stroke="#0d1628" strokeWidth="15" strokeLinecap="round" />
            <path d="m164 445-17 49 83 8 17-35m28-32 22 45 83-23-26-43" fill="#111a2c" stroke="#9b203a" strokeWidth="3" />
            <path d="m134 208 60 49 39 2 49-50m-115 63 65 26 59-29m-112 76 56 36 59-38" stroke="#ffafb6" strokeOpacity=".31" strokeWidth="2" />
          </svg>

          <div className="opening-slide__signal-card">
            <span className="opening-slide__signal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 3 20h18L12 3Z" />
                <path d="M12 9v4m0 3h.01" />
              </svg>
            </span>
            <span className="opening-slide__signal-copy">
              <small>NEIGHBORHOOD SIGNAL</small>
              <strong>{signalOn ? "WATCHFUL EYES ACTIVE" : "ALL QUIET. FOR NOW."}</strong>
            </span>
            <button
              className={`opening-slide__signal-toggle${signalOn ? " is-active" : ""}`}
              type="button"
              aria-label={signalOn ? "Turn city signal off" : "Turn city signal on"}
              aria-pressed={signalOn}
              onClick={() => setSignalOn((isOn) => !isOn)}
            >
              <span />
            </button>
          </div>

          <span className="opening-slide__scene-index" aria-hidden="true">
            <span>40°43&apos; N</span>
            <span>NEW YORK, NY</span>
          </span>
        </div>
      </div>

      <div className="opening-slide__footer">
        <span>AN ORIGINAL ROOFTOP HERO STORY</span>
        <span>SCROLL TO START THE STORY&nbsp; ↓</span>
      </div>
    </section>
  );
};

export default Section1;
