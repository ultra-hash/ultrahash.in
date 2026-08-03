"use client";

import { useEffect } from "react";
import { badges } from "@/lib/data";

export default function CredlyBadges() {
  useEffect(() => {
    if (document.getElementById("credly-embed-js")) return;
    const script = document.createElement("script");
    script.id = "credly-embed-js";
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="section-content badges-row">
      {badges.map((id) => (
        <div
          key={id}
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id={id}
          data-share-badge-host="https://www.credly.com"
          className="badge"
        />
      ))}
    </div>
  );
}
