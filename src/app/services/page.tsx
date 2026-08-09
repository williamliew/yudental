"use client";

import { useEffect } from "react";

export default function ServicesRedirectPage() {
  useEffect(() => {
    window.location.replace("/dental-lab-services/");
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center text-grey-mid">
      <p>Redirecting to dental lab services…</p>
      <p className="mt-4">
        <a href="/dental-lab-services/">Continue to dental lab services</a>
      </p>
    </div>
  );
}
