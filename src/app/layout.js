import { Pixelify_Sans, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navigation from "@/app/components/Navigation";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import DrawTools from "@/app/components/DrawTools";
import RisoPrint from "@/app/components/RisoPrint";
import "./styles/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Yafira | designer + engineer",
  description:
    "i design and build interactive products across software, hardware, and emerging interfaces.",
  openGraph: {
    title: "Yafira | designer + engineer",
    description:
      "i design and build interactive products across software, hardware, and emerging interfaces.",
    images: [
      {
        url: "/assets/flower-network-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yafira ✿ | design engineer & creative technologist",
    description:
      "i design and build interactive products across software, hardware, and emerging interfaces.",
    images: ["/assets/flower-network-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  applicationName: "Yafira ✿",
  appleWebApp: { title: "Yafira ✿" },
};

const pixelifySans = Pixelify_Sans({ weight: "400", subsets: ["latin"] });
// hero headline only — a genuinely "computerized" monospace, distinct
// from Pixelify Sans's retro-pixel-game feel. exposed as --font-hero
// so it doesn't touch the rest of the site (section headers, project
// titles, etc. all stay on Pixelify Sans).
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hero",
});
// name accent in the hero — Departure Mono isn't on Google Fonts, so
// it's self-hosted from src/app/fonts (font files + SIL OFL license
// from github.com/rektdeckard/departure-mono, itself sourced from
// departuremono.com by Helena Zhang). previously the name used
// Pixelify Sans here, which clashed visually against the Space Mono
// sentence around it — Departure Mono is monospace like the rest of
// the hero, so it stays legible as a unit while still standing out
// via color/weight.
const departureMono = localFont({
  src: [
    {
      path: "./fonts/departure-mono/DepartureMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/departure-mono/DepartureMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-name-accent",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the blocking theme script below means the
    // server-rendered HTML and the first client paint can legitimately
    // differ (server doesn't know the visitor's saved/system theme) —
    // this tells React that mismatch is expected and safe to ignore.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // runs before paint so the right theme applies immediately —
          // no flash of the wrong theme on load. falls back to the
          // system dark-mode preference if the person hasn't chosen yet.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${pixelifySans.className} ${spaceMono.variable} ${departureMono.variable}`}
      >
        <RisoPrint />
        <BackgroundPattern />
        <Navigation />
        <DrawTools />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
