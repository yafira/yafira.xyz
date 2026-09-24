"use client";

import { useEffect } from "react";
import { apply, remove } from "fluoro-riso";

// the two inks the site prints in; swap for any fluoro preset or hex pair
const INKS = { inkA: "#ff48b0", inkB: "#0078bf" };

// prints the page through fluoro while the riso theme is on.
// fluoro picks what to filter per browser (the root in chrome, the body in
// safari and firefox), so this only has to watch the theme attribute.
export default function RisoPrint() {
  useEffect(() => {
    const root = document.documentElement;
    let printed = false;

    const sync = () => {
      const wanted = root.getAttribute("data-theme") === "riso";
      if (wanted && !printed) apply(INKS);
      if (!wanted && printed) remove();
      printed = wanted;
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      observer.disconnect();
      if (printed) remove();
    };
  }, []);

  return null;
}
