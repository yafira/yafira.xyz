import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LabFlyout from "@/app/components/LabFlyout";
import ThemeToggle from "@/app/components/ThemeToggle";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import "./styles/globals.css";
import "./styles/mobile.css";

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
    <html lang="en">
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
        <nav className="navigation">
          <div className="nav-links">
            <Link href="/" className="home-icon">
              <Image
                src="/assets/flower-sm.png"
                alt="home"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/about">about</Link>
            <Link href="/cv">cv</Link>
            <LabFlyout />
            <ThemeToggle />
          </div>
        </nav>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
