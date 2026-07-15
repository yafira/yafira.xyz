// tiny client wrapper: electrocute-ui ships without "use client",
// so its components can't be imported into server components directly.
// this file is the bridge — the about page renders <PatchMark />.

import { Inkbloom } from "electrocute-ui";

export default function PatchMark() {
  return <Inkbloom className="patch-mark" aria-hidden="true" />;
}
