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
    <section className="min-h-screen w-full bg-slate-50 text-slate-900 flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Background Decorator Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-indigo-700 uppercase bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/80 rounded-full shadow-md hover:shadow-lg transition-shadow">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Built For Growth
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Everything you need
            </span>{" "}
            to build faster
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Empower your workflow with a modern tech stack engineered for scale,
            reliability, and lightning-fast performance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      aria-pressed={selectedCategory === cat}
                      className={`rounded-full px-5 py-2.5 text-[12px] font-bold transition-all duration-300 border transform hover:scale-105 ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-sky-300/50 border-transparent"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
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
                    className="w-full rounded-full border border-slate-300 bg-white px-12 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-400 focus:border-transparent focus:outline-none shadow-sm transition-all"
                    aria-label="Search features"
                  />
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
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
                          ? "border-transparent ring-2 ring-sky-400 bg-gradient-to-br from-sky-50 to-indigo-50 shadow-xl shadow-sky-200/50 scale-105"
                          : "border-slate-200 bg-white hover:shadow-lg hover:border-sky-200"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all ${
                            isSelected
                              ? "bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg"
                              : "bg-sky-50 text-sky-600 group-hover:bg-sky-100"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${
                            isSelected
                              ? "bg-sky-200 text-sky-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {feature.category}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600 group-hover:text-slate-700">
                          {feature.description}
                        </p>
                      </div>
                      <span
                        className={`self-start rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wider transition-all ${
                          isSelected
                            ? "bg-sky-300 text-sky-900"
                            : "bg-slate-100 text-slate-700"
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

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                {activeItem.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                    {activeItem.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {activeItem.stat}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">
                  Summary
                </h4>
                <p className="text-sm leading-7 text-slate-600">
                  {activeItem.description}
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">
                  Why it matters
                </h4>
                <p className="text-sm leading-7 text-slate-600">
                  {activeItem.details}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-slate-600">
                Ready to integrate{" "}
                <span className="font-semibold text-slate-900">
                  {activeItem.title}
                </span>
                ?
              </span>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
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
