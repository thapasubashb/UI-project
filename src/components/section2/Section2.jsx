import React, { useState, useMemo } from "react";
import "./Section2.css";

const Section2 = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const features = [
    {
      id: "performance",
      category: "Speed",
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed and high throughput, ensuring your users get instant responses without lag.",
      stat: "< 50ms latency",
      details:
        "Edge-cached content delivery coupled with serverless execution keeps TTFB minimal globally.",
      bullets: [
        "Global edge delivery",
        "Real-time request routing",
        "Elastic scalability",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 transition-colors group-hover:text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "security",
      category: "Protection",
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption with zero-knowledge architecture to keep your data safe and private.",
      stat: "AES-256 & SOC2",
      details:
        "Automated compliance checks, granular RBAC permissions, and real-time threat prevention.",
      bullets: [
        "Zero-trust access",
        "Continuous compliance checks",
        "Granular permission controls",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 transition-colors group-hover:text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: "analytics",
      category: "Insights",
      title: "Real-time Analytics",
      description:
        "Deep insights into user behavior and system health with customizable live dashboards.",
      stat: "Live telemetry",
      details:
        "Stream events directly into your warehouse with sub-second event processing pipelines.",
      bullets: [
        "Live dashboard views",
        "Predictive trend alerts",
        "Warehouse-ready exports",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 transition-colors group-hover:text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const categories = ["all", "Speed", "Protection", "Insights"];

  const filteredFeatures = useMemo(() => {
    return features.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeItem = features[activeFeature] || features[0];

  return (
    <section className="section-two relative w-full px-5 py-20 sm:px-6 lg:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12">
        <div className="section-two__intro max-w-3xl space-y-5">
          <span className="section-two__eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em]">
            <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
            02 / Platform capabilities
          </span>
          <h2 className="section-two__title text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            The infrastructure behind{" "}
            <span>better decisions.</span>
          </h2>
          <p className="section-two__description max-w-2xl text-base leading-7 md:text-lg">
            Explore the systems that keep every customer interaction fast,
            protected, and measurable.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="section-two__metric rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
              99.98% uptime
            </span>
            <span className="section-two__metric section-two__metric--accent rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
              24/7 orchestration
            </span>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-stretch">
          <div className="space-y-6">
            <div className="section-two__toolbar rounded-[1.75rem] border p-4 backdrop-blur-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      aria-pressed={selectedCategory === cat}
                      className="section-two__filter rounded-xl border px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full lg:max-w-sm">
                  <input
                    type="text"
                    placeholder="Search features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="section-two__search w-full rounded-xl border px-12 py-3 text-sm outline-none transition-all"
                    aria-label="Search features"
                  />
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7d899a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredFeatures.length === 0 ? (
                <div className="section-two__empty col-span-full rounded-3xl border border-dashed p-12 text-center">
                  <p className="font-medium">
                    No matching features found.
                  </p>
                </div>
              ) : (
                filteredFeatures.map((feature) => {
                  const indexInOriginal = features.findIndex(
                    (f) => f.id === feature.id,
                  );
                  const isSelected = activeFeature === indexInOriginal;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(indexInOriginal)}
                      aria-pressed={isSelected}
                      className="section-two__feature-card group flex transform flex-col gap-4 rounded-[1.5rem] border p-5 text-left transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div
                          className="section-two__feature-icon flex h-14 w-14 items-center justify-center rounded-xl transition-all"
                        >
                          {feature.icon}
                        </div>
                        <span
                          className="section-two__category rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all"
                        >
                          {feature.category}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3
                          className="section-two__feature-title text-lg font-bold transition-colors"
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="section-two__feature-description text-sm leading-6"
                        >
                          {feature.description}
                        </p>
                      </div>
                      <span
                        className="section-two__stat self-start rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wider transition-all"
                      >
                        {feature.stat}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="section-two__detail rounded-[2rem] border p-7 md:p-9 lg:p-10">
            <div className="mb-8 flex items-start gap-4">
              <div className="section-two__detail-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] text-white">
                {activeItem.icon}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="section-two__detail-pill rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
                    {activeItem.category}
                  </span>
                  <span className="section-two__detail-pill rounded-full px-3 py-1 text-xs font-bold">
                    {activeItem.stat}
                  </span>
                </div>
                <h3 className="section-two__detail-title text-3xl font-bold leading-tight">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              <div className="section-two__detail-block space-y-3 border-t pt-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em]">
                  Summary
                </h4>
                <p className="text-base font-medium leading-7">
                  {activeItem.description}
                </p>
              </div>

              <div className="section-two__detail-block space-y-3 border-t pt-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em]">
                  Why it matters
                </h4>
                <p className="text-base font-medium leading-7">
                  {activeItem.details}
                </p>
              </div>

              <div className="section-two__detail-block space-y-3 border-t pt-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em]">
                  What this unlocks
                </h4>
                <ul className="section-two__bullet-list space-y-2 text-sm font-medium">
                  {activeItem.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="section-two__bullet-dot h-2 w-2 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="section-two__cta-copy text-base font-medium">
                Ready to integrate{" "}
                <span className="font-bold">
                  {activeItem.title}
                </span>
                ?
              </span>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#docs"
                  className="section-two__secondary-action inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-bold transition-all"
                >
                  View details
                </a>
                <a
                  href="#docs"
                  className="section-two__primary-action inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition-all active:scale-95"
                >
                  Read Documentation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
