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
      ),
    },
    {
      id: "security",
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption with zero-knowledge architecture to keep your data safe and private.",
      stat: "AES-256 & SOC2",
      details:
        "Automated compliance checks, granular RBAC permissions, and real-time threat prevention.",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "Real-time Analytics",
      description:
        "Deep insights into user behavior and system health with customizable live dashboards.",
      stat: "Live telemetry",
      details:
        "Stream events directly into your warehouse with sub-second event processing pipelines.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ></svg>