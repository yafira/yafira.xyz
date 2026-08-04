"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LabFlyout from "@/app/components/LabFlyout";
import ThemeToggle from "@/app/components/ThemeToggle";

// pulled out of layout.js into its own client component so it can
// read the current route (usePathname needs a client component;
// layout.js stays a server component since it exports metadata).

const NAV_LINKS = [
  { href: "/about", label: "about" },
  { href: "/cv", label: "cv" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  return (
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
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? "nav-active" : undefined}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <LabFlyout />
        <ThemeToggle />
      </div>
    </nav>
  );
}
