import React, { useState } from "react";

const Section2 = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "performance",
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed and high throughput, ensuring your users get instant responses without lag.",
      stat: "< 50ms latency",
      details:
        "Edge-cached content delivery coupled with serverless execution keeps TTFB minimal globally.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
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