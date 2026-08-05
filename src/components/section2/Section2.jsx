import React, { useState, useMemo } from "react";

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
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 group-hover:text-blue-600 transition-colors"
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
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 group-hover:text-blue-600 transition-colors"
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
      icon: (
        <svg
          className="w-6 h-6 text-sky-600 group-hover:text-blue-600 transition-colors"
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
    <section className="min-h-screen w-full bg-slate-950 text-slate-100 py-24 px-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-16 flex justify-center pointer-events-none">
        <div className="w-125 h-80 rounded-full bg-sky-500/10 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        <header className="text-center max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            Feature gateway
          </span>
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Reimagined product structure for faster decisions
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed">
              Browse the best capabilities, filter by category, and dive into
              the feature details that matter most for your team.
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="rounded-4xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)] backdrop-blur-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-2 text-[11px] font-semibold transition-colors duration-200 ${
                        selectedCategory === cat
                          ? "bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/10"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Search features"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900/95 px-12 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                  <svg
                    className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
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
                <div className="rounded-4xl border border-dashed border-slate-700 bg-slate-900/80 p-8 text-center text-slate-400">
                  No matching features found.
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
                      className={`group flex flex-col gap-4 rounded-4xl border p-6 text-left transition-all duration-300 ${
                        isSelected
                          ? "border-sky-400 bg-sky-500/10 shadow-[0_25px_60px_-40px_rgba(14,165,233,0.8)]"
                          : "border-slate-800 bg-slate-900/90 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                          {feature.icon}
                        </div>
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                          {feature.category}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-6 text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                      <span className="self-start rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-300">
                        {feature.stat}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="rounded-4xl border border-slate-800 bg-slate-900/95 p-8 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.9)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-sky-400">
                {activeItem.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {activeItem.category}
                  </span>
                  <span className="text-xs font-semibold text-sky-300/80">
                    {activeItem.stat}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-white">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-3 rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Summary
                </h4>
                <p className="text-sm leading-7 text-slate-300">
                  {activeItem.description}
                </p>
              </div>

              <div className="space-y-3 rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Why it matters
                </h4>
                <p className="text-sm leading-7 text-slate-300">
                  {activeItem.details}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-slate-400">
                Ready to integrate{" "}
                <span className="font-semibold text-white">
                  {activeItem.title}
                </span>
                ?
              </span>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
