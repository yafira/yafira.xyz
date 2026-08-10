import { Pixelify_Sans } from "next/font/google";
import Navigation from "@/app/components/Navigation";
import BackgroundPattern from "@/app/components/BackgroundPattern";
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
      <body className={pixelifySans.className}>
        <BackgroundPattern />
        <Navigation />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
