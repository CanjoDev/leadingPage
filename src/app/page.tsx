"use client";

import { LandingHeader } from "./_components/landing-header";
import { FirstFold } from "./_sections/first-fold";
import { SecondFold } from "./_sections/second-fold";
import { ThirdFold } from "./_sections/third-fold";

// ✅ Link direto do checkout (Hotmart)
const CHECKOUT_LINK = "https://pay.hotmart.com/V103697062A?checkoutMode=10";
const OFFER_ANCHOR = "#oferta";

export default function Page() {
  return (
<main className="relative flex min-h-screen flex-col overflow-x-hidden">
  <LandingHeader offerAnchor={OFFER_ANCHOR} />

  <div className="flex-1">
    <FirstFold offerAnchor={OFFER_ANCHOR} />
    <SecondFold checkoutLink={CHECKOUT_LINK} offerAnchor={OFFER_ANCHOR} />
    <ThirdFold offerAnchor={OFFER_ANCHOR} />
  </div>

  {/* ✅ footer precisa ser irmão direto do content wrapper */}
  <footer
    className="py-4"
    style={{ background: "rgba(201,164,92,0.55)" }}
  >
    <div className="mx-auto w-full max-w-6xl px-6">
      <p
        className="text-center text-xs md:text-sm"
        style={{ color: "rgba(29,20,16,0.78)" }}
      >
        Kailaine Gomes | Todos os direitos reservados®.
      </p>
    </div>
  </footer>
</main>

  );
}
