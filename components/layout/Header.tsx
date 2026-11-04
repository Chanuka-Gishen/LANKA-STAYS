"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="container-main">
        <div className="flex h-[76px] items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
            aria-label="Lanka Stayz home"
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-primary">
              Lanka<span className="text-accent">Stayz</span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/explore">Find a Stay</Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-primary md:hidden"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <Menu size={22} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-border py-5 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-surface-muted text-primary"
                      : "text-text-secondary hover:bg-surface-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 px-4">
                <Button href="/explore" fullWidth onClick={closeMenu}>
                  Find a Stay
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
