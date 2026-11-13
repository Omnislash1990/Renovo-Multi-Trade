"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);
  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

function getVisible() {
  if (window.scrollY < 560) {
    return false;
  }
  const enquiry = document.getElementById("enquire");
  if (!enquiry) {
    return true;
  }
  return enquiry.getBoundingClientRect().top >= window.innerHeight * 0.82;
}

function getServerVisible() {
  return false;
}

export function MobileCta() {
  const visible = useSyncExternalStore(subscribe, getVisible, getServerVisible);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur-md md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      } transition-transform duration-300 motion-reduce:transition-none`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#enquire"
        className="flex h-12 items-center justify-center rounded-full bg-copper-deep text-sm font-semibold text-white hover:bg-copper-ink"
        tabIndex={visible ? 0 : -1}
        aria-hidden={visible ? undefined : true}
      >
        Request a survey
      </a>
    </div>
  );
}
