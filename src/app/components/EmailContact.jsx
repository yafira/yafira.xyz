"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

// the address itself is the mailto link, with a little copy icon beside it
// that flips to a check when it's on your clipboard

export default function EmailContact({ email }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // older browsers, select + copy instead
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        document.body.removeChild(el);
        return;
      }
      document.body.removeChild(el);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="contact-email">
      <a className="contact-email-address" href={`mailto:${email}`}>
        {email}
      </a>
      <button
        type="button"
        className={`contact-email-copy${copied ? " is-copied" : ""}`}
        onClick={handleCopy}
        aria-label="copy email address"
        title="copy email address"
      >
        {copied ? (
          <Check size={20} strokeWidth={2.5} aria-hidden="true" />
        ) : (
          <Copy size={20} strokeWidth={2.5} aria-hidden="true" />
        )}
        <span className="contact-email-tip" aria-hidden="true">
          copied!
        </span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "email address copied" : ""}
      </span>
    </div>
  );
}
