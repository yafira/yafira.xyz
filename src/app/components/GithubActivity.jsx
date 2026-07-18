"use client";

import { useState, useEffect } from "react";

// pulls your most recent public commit live from the GitHub API —
// "last shipped 3 days ago" is a fundamentally different signal
// than a static portfolio. no auth needed for public repo commits;
// GitHub's API sends CORS headers so this works client-side.

function timeAgo(dateStr) {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

// checks a small list of your repos and surfaces whichever has the
// most recent commit — so this stays accurate as your focus shifts
// between projects, rather than hardcoding one repo forever
const REPOS = ["electrocute-ui", "tinytinker.tools", "electrocute"];

export default function GithubActivity() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const results = await Promise.all(
          REPOS.map((repo) =>
            fetch(
              `https://api.github.com/repos/yafira/${repo}/commits?per_page=1`,
            )
              .then((r) => (r.ok ? r.json() : null))
              .catch(() => null),
          ),
        );

        const commits = results
          .map((commits, i) =>
            commits && commits[0]
              ? { repo: REPOS[i], commit: commits[0] }
              : null,
          )
          .filter(Boolean)
          .sort(
            (a, b) =>
              new Date(b.commit.commit.author.date) -
              new Date(a.commit.commit.author.date),
          );

        if (cancelled) return;

        if (commits.length === 0) {
          setState({ status: "error" });
          return;
        }

        const latest = commits[0];
        setState({
          status: "ready",
          repo: latest.repo,
          date: latest.commit.commit.author.date,
          url: latest.commit.html_url,
          message: latest.commit.commit.message.split("\n")[0],
        });
      } catch {
        if (!cancelled) setState({ status: "error" });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return <p className="github-activity is-loading">checking recent activity…</p>;
  }
  if (state.status === "error") {
    return null; // fail silently — this is a bonus signal, not critical content
  }

  return (
    <a
      href={state.url}
      target="_blank"
      rel="noopener noreferrer"
      className="github-activity"
      title={state.message}
    >
      <span className="github-activity-dot" aria-hidden="true" />
      last shipped {timeAgo(state.date)} · {state.repo}
    </a>
  );
}
