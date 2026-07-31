"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

// two ways to reach the same email: the primary button still opens the
// mail app immediately (mailto:), same as before. the second small
// button copies the address to the clipboard instead — for anyone who'd
// rather not have their mail client pop open. it's always present (not
// hover-only) so it works the same on touch as it does with a mouse.

export default function EmailContact({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fall back silently, the mailto
      // button right next to this one still works
    }
  };

  return (
    <div className="contact-email-group">
      <a
        className="contact-button"
        href={`mailto:${email}`}
        aria-label="send me an email"
      >
        <Mail size={18} aria-hidden="true" />
        <span>email me</span>
      </a>
      <button
        type="button"
        className="contact-copy-button"
        onClick={handleCopy}
        aria-label={copied ? "email address copied" : "copy email address"}
        title="copy email address"
      >
        {copied ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        <span>{copied ? "copied!" : "copy email"}</span>
      </button>
    </div>
  );
}
