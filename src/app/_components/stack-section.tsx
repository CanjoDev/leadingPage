"use client";

import { ReactNode } from "react";

/**
 * Seção em “stack” (encaixe no scroll).
 * - Cada seção ocupa 1 viewport.
 * - O conteúdo fica sticky abaixo do header e a próxima seção empurra a anterior.
 * - Se o conteúdo for mais alto que a viewport, permite scroll interno.
 */
export function StackSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative h-[100svh] ${className}`}
      style={{ scrollMarginTop: "var(--header-h)" }}
    >
      <div
        className="sticky z-10"
        style={{
          top: "var(--header-h)",
          height: "calc(100svh - var(--header-h))",
        }}
      >
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
