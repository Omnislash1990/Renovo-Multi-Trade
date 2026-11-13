"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrolled() {
  return window.scrollY > 12;
}

function getServerScrolled() {
  return false;
}

export function Header() {
  const scrolled = useSyncExternalStore(subscribe, getScrolled, getServerScrolled);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const onDark = !scrolled && !open;

  useEffect(() => {
    if (!open) {
      return;
    }

    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        onDark
          ? "border-transparent bg-transparent"
          : "border-line/80 bg-paper/92 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-copper" aria-hidden="true" />
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="rounded-md bg-white px-2 py-1 shadow-sm"
          aria-label={`${site.name}, home`}
        >
          <Logo priority className="h-10 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                onDark ? "text-cream/80 hover:text-cream" : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#enquire"
            className="hidden h-11 items-center rounded-full bg-copper-deep px-5 text-sm font-semibold text-white transition hover:bg-copper-ink sm:inline-flex"
          >
            Request a survey
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className={`inline-flex size-11 items-center justify-center rounded-full border md:hidden ${
              onDark
                ? "border-cream/25 text-cream"
                : "border-line bg-white text-ink"
            }`}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {nav.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="border-b border-line py-3.5 text-base font-medium text-ink"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#enquire"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-copper-deep text-sm font-semibold text-white hover:bg-copper-ink"
              onClick={closeMenu}
            >
              Request a survey
            </a>
            <a href={site.phoneHref} className="mt-3 py-2 text-center text-sm font-medium text-ink-soft">
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
