"use client";

// static now — the cycling claim lives on the homepage only, so the
// two pages stop duplicating the same trick. this is just a quiet
// page label + the credential line.

export default function WorkHero() {
  return (
    <header className="work-intro">
      <h1 className="work-headline">work</h1>
      <p className="work-cred">
        nyu itp · ml5.js · open hardware summit berlin · npm · nyc resistor
      </p>
    </header>
  );
}
