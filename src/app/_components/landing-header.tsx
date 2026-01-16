"use client";

import Link from "next/link";

import { Container } from "./landing-ui";

export function LandingHeader({ offerAnchor }: { offerAnchor: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--bg)]/14 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="text-sm font-semibold tracking-tight">
            Kailaine Gomes
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex text-black/60">
            <a className="transition hover:text-black" href="#conteudo">
              Conteúdo
            </a>
            <a className="transition hover:text-black" href="#bonus">
              Bônus
            </a>
            <a className="transition hover:text-black" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-black" href="#faq">
              Dúvidas
            </a>
          </nav>

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
      </Container>
    </header>
  );
}
