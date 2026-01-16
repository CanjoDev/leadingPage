"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

/**
 * Destaque em tarja com contraste maior.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-xl px-3 py-1"
      style={{
        background: "linear-gradient(135deg, var(--gold) 0%, #B08A45 100%)",
        color: "#2B1E12",
        boxShadow: "0 18px 42px rgba(176,138,69,0.30)",
      }}
    >
      {children}
    </span>
  );
}

/** Wrapper padrão para cards (menos branco “estourado”, mais elegante). */
export function LuxCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={[
        "rounded-3xl border border-black/5",
        "shadow-[0_24px_60px_rgba(17,12,9,0.12)]",
        className,
      ].join(" ")}
      style={{
        background: "rgba(255,255,255,0.84)",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </Card>
  );
}

/** Botão principal com presença */
export function PrimaryButton({
  children,
  href,
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "gold" | "emerald";
  className?: string;
}) {
  const bg =
    variant === "emerald"
      ? "linear-gradient(135deg, var(--emerald) 0%, #0B5A44 100%)"
      : "linear-gradient(135deg, var(--gold) 0%, #B08A45 100%)";

  const shadow =
    variant === "emerald"
      ? "0 18px 42px rgba(15,109,82,0.28)"
      : "0 18px 42px rgba(176,138,69,0.32)";

  const textColor = variant === "emerald" ? "#FFFFFF" : "#2B1E12";

  return (
    <Button
      asChild
      className={[
        "h-12 rounded-2xl px-7 text-base font-semibold",
        "transition-all hover:-translate-y-[1px] hover:brightness-105 active:translate-y-0",
        className,
      ].join(" ")}
      style={{ background: bg, boxShadow: shadow, color: textColor }}
    >
      {href.startsWith("#") ? (
        <a href={href}>{children}</a>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </Button>
  );
}

/**
 * Moldura “taupe” (marrom elegante) para imagens.
 */
export function ImageFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-[1.75rem] p-[1px] shadow-[0_30px_80px_rgba(29,20,16,0.18)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(201,164,92,0.42), rgba(29,20,16,0.10))",
      }}
    >
      <div
        className="rounded-[1.72rem] p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(232,222,210,0.92), rgba(232,222,210,0.62))",
          border: "1px solid rgba(29,20,16,0.10)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
