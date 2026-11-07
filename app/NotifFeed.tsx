"use client";

import { useEffect, useState } from "react";

const allMessages = [
  "Speaker invitation received",
  "New partnership request",
  "Investor wants to connect",
  "Podcast guest request",
  "Collaboration proposal",
  "Meeting request from CEO",
  "Event speaker opportunity",
  "Joint venture inquiry",
  "Media interview request",
  "Referral introduction",
];

export default function NotifFeed() {
  const [items, setItems] = useState(allMessages.slice(0, 4));
  const [nextIndex, setNextIndex] = useState(4);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);

      setTimeout(() => {
        setItems((prev) => {
          const next = allMessages[nextIndex % allMessages.length];
          return [...prev.slice(1), next];
        });
        setNextIndex((prev) => prev + 1);
        setExiting(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div style={{ height: 260, width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          transition: "transform 0.6s ease",
          transform: exiting ? "translateY(-62px)" : "translateY(0)",
        }}
      >
        {items.map((text, i) => (
          <div
            key={`${text}-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(209,172,114,0.06)",
              border: "1px solid rgba(209,172,114,0.15)",
              borderRadius: 6,
              padding: "16px 20px",
              height: 54,
              flexShrink: 0,
              opacity: exiting && i === 0 ? 0 : 1,
              transition: "opacity 0.5s ease",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--muted-lt)",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
