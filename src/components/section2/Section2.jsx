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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f4f7fb] px-6 py-24 text-[#172033]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(23,32,51,0.04)_1px,transparent_1px),linear-gradient(30deg,rgba(23,32,51,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#f2d98a]/35 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#e1873d]">
            <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
            02 / Platform capabilities
          </span>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#172033] md:text-6xl">
            The infrastructure behind{" "}
            <span className="text-[#e1873d]">better decisions.</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[#526078] md:text-lg">
            Explore the systems that keep every customer interaction fast,
            protected, and measurable.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#172033]/10 bg-white/75 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      aria-pressed={selectedCategory === cat}
                      className={`rounded-lg border px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        selectedCategory === cat
                          ? "border-[#e1873d] bg-[#e1873d] text-white shadow-lg shadow-[#e1873d]/20"
                          : "border-[#172033]/10 bg-[#f4f7fb] text-[#526078] hover:border-[#e1873d]/50 hover:bg-white"
                      }`}
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
                    className="w-full rounded-lg border border-[#172033]/10 bg-[#f4f7fb] px-12 py-3 text-sm text-[#172033] placeholder:text-[#7d899a] outline-none transition-all focus:border-[#e1873d] focus:ring-1 focus:ring-[#e1873d]"
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

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredFeatures.length === 0 ? (
                <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                  <p className="text-slate-500 font-medium">
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
                      className={`group flex flex-col gap-4 rounded-2xl border p-6 text-left transition-all duration-300 transform hover:scale-105 ${
                        isSelected
                          ? "border-[#e1873d] bg-[#e1873d] text-white shadow-xl shadow-[#e1873d]/20"
                          : "border-[#172033]/10 bg-white text-[#172033] hover:border-[#e1873d]/50 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all ${
                            isSelected
                              ? "bg-[#172033] text-[#f2d98a] shadow-lg"
                              : "bg-[#f2d98a]/35 text-[#e1873d] group-hover:bg-[#f2d98a]/60"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-[#f4f7fb] text-[#526078]"
                          }`}
                        >
                          {feature.category}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3
                          className={`text-lg font-bold transition-colors ${isSelected ? "text-white" : "text-[#172033] group-hover:text-[#e1873d]"}`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-6 ${isSelected ? "text-white/80" : "text-[#526078]"}`}
                        >
                          {feature.description}
                        </p>
                      </div>
                      <span
                        className={`self-start rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wider transition-all ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[#f4f7fb] text-[#526078]"
                        }`}
                      >
                        {feature.stat}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-[#172033]/10 bg-white p-7 text-[#172033] shadow-xl md:p-9">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e1873d] text-white shadow-lg">
                {activeItem.icon}
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="rounded-full bg-[#f2d98a]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#a45b1e]">
                    {activeItem.category}
                  </span>
                  <span className="rounded-full bg-[#f2d98a]/40 px-3 py-1 text-xs font-bold text-[#a45b1e]">
                    {activeItem.stat}
                  </span>
                </div>
                <h3 className="text-3xl font-bold leading-tight text-[#172033]">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-3 border-t border-[#142238]/15 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1873d]">
                  Summary
                </h4>
                <p className="text-base font-medium leading-7 text-[#526078]">
                  {activeItem.description}
                </p>
              </div>

              <div className="space-y-3 border-t border-[#142238]/15 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1873d]">
                  Why it matters
                </h4>
                <p className="text-base font-medium leading-7 text-[#526078]">
                  {activeItem.details}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-base text-slate-700 font-medium">
                Ready to integrate{" "}
                <span className="font-bold text-[#e1873d]">
                  {activeItem.title}
                </span>
                ?
              </span>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-lg bg-[#172033] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#2b3b57] active:scale-95"
              >
                Read Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
