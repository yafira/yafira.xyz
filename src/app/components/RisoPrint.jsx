"use client";

import { useEffect } from "react";
import { apply, remove } from "fluoro-riso";

// how the site prints: two inks, in fluoro's lite mode. lite lays three blend
// layers over the page instead of filtering it, so scrolling stays fast and
// every part of the page gets printed, in safari too
const PRINT = { inkA: "#ff48b0", inkB: "#0078bf", mode: "lite" };

// prints the page through fluoro while the riso theme is on
export default function RisoPrint() {
  useEffect(() => {
    const root = document.documentElement;
    let printed = false;

    const sync = () => {
      const wanted = root.getAttribute("data-theme") === "riso";
      if (wanted && !printed) apply(PRINT);
      if (!wanted && printed) remove(PRINT);
      printed = wanted;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      observer.disconnect();
      if (printed) remove(PRINT);
    };
  }, []);

  return null;
}
