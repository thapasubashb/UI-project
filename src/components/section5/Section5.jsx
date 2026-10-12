import { useState } from "react";
import "./Section5.css";

const Section5 = () => {
  const [signalOn, setSignalOn] = useState(false);

  return (
    <section className="section-five slide-four" aria-labelledby="slide-four-title">
      <div className="slide-four__web" aria-hidden="true">
        <svg viewBox="0 0 650 650" fill="none">
          <circle cx="325" cy="325" r="105" />
          <circle cx="325" cy="325" r="210" />
          <circle cx="325" cy="325" r="315" />
          <path d="M325 10v630M10 325h630M102 102l446 446m0-446L102 548" />
          <path d="m325 10 78 105-78 105-78-105 78-105Zm315 315-105 78-105-78 105-78 105 78ZM325 640l-78-105 78-105 78 105-78 105ZM10 325l105-78 105 78-105 78-105-78Z" />
        </svg>
      </div>

      <div className="slide-four__layout">
        <div className="slide-four__copy">
          <div className="slide-four__topline">
            <span className="slide-four__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 3 19 12l8-5-5 8 8 3-9 2 4 9-8-6-8 6 4-9-9-2 8-3-5-8 8 5 1-9Z" />
                <circle cx="16" cy="17" r="3" />
              </svg>
            </span>
            <span>NEW YORK, NEW YORK</span>
            <span className="slide-four__topline-rule" />
            <span>ALWAYS HOME</span>
          </div>

          <p className="slide-four__eyebrow">
            <span />
            05 / UNTIL NEXT TIME
          </p>

          <h2 id="slide-four-title" className="slide-four__title">
            THE CITY&apos;S
            <br />
            IN <span>GOOD HANDS.</span>
          </h2>

          <p className="slide-four__description">
            The sun is coming up. The mask stays on. Somewhere out there,
            someone still needs a friendly neighborhood hero.
          </p>

          <div className="slide-four__quote">
            <span className="slide-four__quote-rule" />
            <p>
              Wherever the next call comes from,
              <br />
              you know who to call.
            </p>
          </div>

          <button
            className={`slide-four__button${signalOn ? " is-active" : ""}`}
            type="button"
            aria-pressed={signalOn}
            onClick={() => setSignalOn((isOn) => !isOn)}
          >
            <span>{signalOn ? "SIGNAL IS ON" : "KEEP THE SIGNAL ON"}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 9a13 13 0 0 1 18 0m-15 3a9 9 0 0 1 12 0m-9 3a5 5 0 0 1 6 0m-3 3h.01" />
            </svg>
          </button>

          <div className="slide-four__progress" aria-label="Current slide, 5 of 5">
            <span>05</span>
            <span className="slide-four__progress-track">
              <span />
            </span>
            <span>04</span>
            <span className="slide-four__progress-caption">UNTIL NEXT TIME</span>
          </div>
        </div>

        <div className={`slide-four__scene${signalOn ? " is-active" : ""}`}>
          <div className="slide-four__sunrise" aria-hidden="true" />
          <div className="slide-four__sun" aria-hidden="true" />
          <div className="slide-four__stars" aria-hidden="true" />

          <svg
            className="slide-four__hero"
            viewBox="0 0 440 510"
            fill="none"
            role="img"
            aria-label="A masked hero looking toward the morning sun over the city"
          >
            <defs>
              <linearGradient id="dawn-mask" x1="170" y1="71" x2="268" y2="210">
                <stop stopColor="#ef4253" />
                <stop offset="1" stopColor="#851129" />
              </linearGradient>
              <linearGradient id="dawn-suit" x1="128" y1="208" x2="318" y2="475">
                <stop stopColor="#da263d" />
                <stop offset=".46" stopColor="#a90f2b" />
                <stop offset="1" stopColor="#11192b" />
              </linearGradient>
              <linearGradient id="dawn-glow" x1="168" y1="248" x2="288" y2="422">
                <stop stopColor="#ff6572" stopOpacity=".55" />
                <stop offset="1" stopColor="#203961" stopOpacity=".09" />
              </linearGradient>
            </defs>
            <path d="M163 204c-24-17-34-51-21-78l33-72c10-22 35-35 60-30l35 7c26 5 44 29 42 55l-4 75c-2 31-25 56-56 61l-89-18Z" fill="url(#dawn-mask)" stroke="#ffafb5" strokeOpacity=".38" strokeWidth="3" />
            <path d="m158 132 46-13-17 26-40 14 11-27Zm87-13 46 13 11 27-40-14-17-26Z" fill="#deebff" />
            <path d="m184 128 18-5-12 12-13 4 7-11Zm47-5 18 5 7 11-13-4-12-12Z" fill="#142039" />
            <path d="M135 210c-32 13-57 42-67 77l-31 114 39 24 71-105-20 123 80 49 93-39-14-134 71 100 37-26-50-118c-15-36-46-63-82-74l-53 31-48-22-26 0Z" fill="url(#dawn-suit)" stroke="#ff8691" strokeOpacity=".38" strokeWidth="3" />
            <path d="m145 219 43 27-27 104 57 91 50-29-5-123 36-58-66 32-44-31-44-13Z" fill="url(#dawn-glow)" />
            <path d="m195 269 34-13 30 25-29 30-36-20 1-22Z" fill="#f33047" stroke="#ffb7bd" strokeOpacity=".65" strokeWidth="2" />
            <path d="m217 266 13 9-8 10-14-5 9-14Z" fill="#ffe8e9" />
            <path d="m79 393-23-8m312-7 26-8" stroke="#0d1628" strokeWidth="15" strokeLinecap="round" />
            <path d="m151 442-16 47 83 7 17-31m33-33 20 47 84-20-26-47" fill="#10182b" stroke="#91203a" strokeWidth="3" />
            <path d="m143 218 58 51 37-1 45-45m-112 57 63 25 58-27m-115 79 54 38 62-38" stroke="#ffadb5" strokeOpacity=".3" strokeWidth="2" />
          </svg>

          <div className="slide-four__city" aria-hidden="true">
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

          <div className="slide-four__glass-card">
            <span className="slide-four__card-label">CITY STATUS</span>
            <span className="slide-four__card-title">
              <i />
              {signalOn ? "SIGNAL TRANSMITTING" : "ALL QUIET. FOR NOW."}
            </span>
            <span className="slide-four__card-caption">A NEW DAY IS ON ITS WAY.</span>
          </div>

          <span className="slide-four__coordinates" aria-hidden="true">
            MANHATTAN
            <br />
            40°43&apos; N / 73°59&apos; W
          </span>
        </div>
      </div>

      <div className="slide-four__footer">
        <span>THE CITY IS NEVER REALLY ALONE.</span>
        <span>TO BE CONTINUED&nbsp; · &nbsp;05 / 05</span>
      </div>
    </section>
  );
};

export default Section5;
