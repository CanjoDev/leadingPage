"use client";

import Link from "next/link";

import { Container } from "./landing-ui";
import { ThemeToggle } from "./theme-toggle";

export function LandingHeader({ offerAnchor }: { offerAnchor: string }) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{ background: "var(--bg)", borderColor: "var(--stroke)" }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Kailaine Gomes
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              className="transition text-[color:var(--muted)] hover:text-[color:var(--ink)]"
              href="#conteudo"
            >
              Conteúdo
            </a>
            <a
              className="transition text-[color:var(--muted)] hover:text-[color:var(--ink)]"
              href="#bonus"
            >
              Bônus
            </a>
            <a
              className="transition text-[color:var(--muted)] hover:text-[color:var(--ink)]"
              href="#sobre"
            >
              Sobre
            </a>
            <a
              className="transition text-[color:var(--muted)] hover:text-[color:var(--ink)]"
              href="#faq"
            >
              Dúvidas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={offerAnchor}
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] active:translate-y-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold) 0%, #B08A45 100%)",
                boxShadow: "0 18px 40px rgba(176,138,69,0.28)",
              }}
            >
              Quero meu guia agora
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
