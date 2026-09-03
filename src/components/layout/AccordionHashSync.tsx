"use client";

import { useEffect } from "react";

function openAccordionFromHash() {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) {
    return;
  }

  const element = document.getElementById(id);
  if (element instanceof HTMLDetailsElement) {
    element.open = true;
    element.scrollIntoView({ block: "start" });
  }
}

export function AccordionHashSync() {
  useEffect(() => {
    openAccordionFromHash();
    window.addEventListener("hashchange", openAccordionFromHash);
    return () => window.removeEventListener("hashchange", openAccordionFromHash);
  }, []);

  return null;
}
