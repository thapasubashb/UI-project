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
    <section className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 flex items-center justify-center py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Decorator Grids & Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-200/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-200/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-200/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-700 uppercase bg-sky-50 border border-sky-200 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            Built For Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Everything you need to build{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              faster
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Empower your workflow with a modern tech stack engineered for scale,
            reliability, and speed.
          </p>
        </div>

        {/* Interactive Filter & Search Controls */}
        <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-xl shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white text-slate-800 transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
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

        {/* Master-Detail Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Feature Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredFeatures.length === 0 ? (
              <div className="p-8 text-center bg-white/60 rounded-2xl border border-slate-200 text-slate-500 text-sm">
                No matching features found.
              </div>
            ) : (
              filteredFeatures.map((feature) => {
                const indexInOriginal = features.findIndex(
                  (f) => f.id === feature.id
                );
                const isSelected = activeFeature === indexInOriginal;

                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(indexInOriginal)}
                    className={`cursor-pointer p-5 rounded-2xl bg-white/80 backdrop-blur-xl border transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? "border-sky-400/80 ring-2 ring-sky-300/40 shadow-[0_0_25px_rgba(56,189,248,0.25)] bg-white"
                        : "border-slate-200/80 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-bold text-slate-900 truncate">
                          {feature.title}
                        </h3>
                        <span className="text-[10px] font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60 shrink-0">
                          {feature.stat}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Detailed Focus Workspace Panel */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white/90 border border-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.15)] backdrop-blur-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {activeItem.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                      Active Focus &bull; {activeItem.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {activeItem.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
                  {activeItem.stat}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-800">
                  Overview
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Technical Execution
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeItem.details}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-6">
              <span className="text-xs text-slate-500">
                Ready to integrate {activeItem.title}?
              </span>
              <a
                href="#docs"
                className="whitespace-nowrap px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_15px_rgba(56,189,248,0.35)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95"
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