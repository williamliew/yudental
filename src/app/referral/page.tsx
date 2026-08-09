"use client";

import { useEffect } from "react";

export default function ReferralRedirectPage() {
  useEffect(() => {
    window.location.replace("/denture-referrals/");
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center text-grey-mid">
      <p>Redirecting to denture referrals…</p>
      <p className="mt-4">
        <a href="/denture-referrals/">Continue to denture referrals</a>
      </p>
    </div>
  );
}
