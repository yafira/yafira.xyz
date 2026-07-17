import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LabLink from "@/app/components/LabLink";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import "./styles/globals.css";
import "./styles/styles.css";
import "./styles/mobile.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Yafira ✿ | design engineer & creative technologist",
  description:
    "i design and build interactive products across software, hardware, and emerging interfaces.",
  openGraph: {
    title: "Yafira ✿ | design engineer & creative technologist",
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
      <head />
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
            <Link href="/work">work</Link>
            <LabLink />
            <Link href="/about">about</Link>
            <Link href="/cv">cv</Link>
          </div>
        </nav>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
