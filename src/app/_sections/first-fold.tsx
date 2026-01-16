"use client";

import Image from "next/image";

import { CheckCircle2, Download, ShieldCheck } from "lucide-react";

import {
  Container,
  Highlight,
  LuxCard,
  PrimaryButton,
  ImageFrame,
} from "../_components/landing-ui";

export function FirstFold({ offerAnchor }: { offerAnchor: string }) {
  return (
    <>
      {/* HERO */}
      <section
        className="section-gradient py-14 md:py-20"
        style={{ paddingTop: "calc(var(--header-h) + 32px)" }}
      >
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              {/* ORIGINAL (PDF): "Permita-se viver sua melhor versão em 2026" */}
              <p className="mb-4 text-[0.95rem] font-medium text-black/60 md:text-base">
                Permita-se viver sua melhor versão em 2026
              </p>

              {/* ALTERADO: manter exatamente como no PDF ("presença" em minúsculo) */}
              <h1 className="lux-h text-4xl font-semibold leading-[1.06] md:text-6xl">
                Permita-se viver sua melhor versão{" "}
                <br className="hidden md:block" />
                em 2026 com o{" "}
                <Highlight>“Destrave sua presença em 7 dias”</Highlight>
              </h1>

              {/* ALTERADO: manter "o guia" em minúsculo e texto 1:1 */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
                o guia definitivo para você se tornar <strong>inconfundível</strong>,{" "}
                <strong>inesquecível</strong> e ocupar o seu lugar no mundo
              </p>

              <div className="mt-7 space-y-4">
                {/* ALTERADO: bullets 1:1 com o PDF (sem pontos finais) */}
                {[
                  "Aplicável para toda profissional que empreende e deseja ser protagonista da sua história",
                  "prático e objetivo com exercícios aplicação",
                  "Ideal para você que está cansada de procrastinar, de se auto sabotar e ser insegura",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(15,109,82,0.10)",
                        border: "1px solid rgba(15,109,82,0.22)",
                      }}
                    >
                      <CheckCircle2
                        className="h-4 w-4"
                        style={{ color: "var(--emerald)" }}
                      />
                    </span>
                    <p className="text-sm leading-relaxed text-black/70 md:text-base">
                      {t}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* ALTERADO: CTA conforme PDF (minúsculo) */}
                <PrimaryButton href={offerAnchor} variant="gold">
                  quero meu guia agora <Download className="ml-2 h-4 w-4" />
                </PrimaryButton>

                {/* ALTERADO: linha de apoio 1:1 do PDF */}
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <ShieldCheck
                    className="h-4 w-4"
                    style={{ color: "var(--bordo)" }}
                  />
                  <span>
                    *Acesso imediato + PDF + exercícios práticos + 4 bônus exclusivos)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageFrame>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/primeiraDobra.png"
                    alt="[FOTO DO PRODUTO]"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ImageFrame>

              <div
                className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full md:block"
                style={{ background: "rgba(15,109,82,.10)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full md:block"
                style={{ background: "rgba(29,20,16,.07)" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEMA */}
      <section className="section-gradient py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="lux-h text-3xl font-semibold leading-tight md:text-5xl">
              Você sente que sua presença está travada?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-black/65 md:text-lg">
              Que toda vez que precisa se expor — seja para gravar um story, produzir conteúdo,
              conduzir uma reunião com um cliente ou falar do seu serviço para um desconhecido —
              você paralisa?
            </p>

            <p className="mt-6 text-sm leading-relaxed text-black/55 md:text-base">
              A verdade é que a maioria das mulheres trava não por falta de capacidade ou
              conhecimento.
              <br />
              Trava porque ainda não tem clareza sobre quem é, o que sustenta e o que quer
              comunicar.
              <br />
              E sem essa clareza, qualquer exposição exige esforço demais e perde naturalidade.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-black/55 md:text-base">
              Sem contar a procrastinação e o peso silencioso de sentir que tudo depende de você
              para fazer acontecer.
            </p>

            <div
              className="mt-7 inline-flex items-center gap-2 rounded-2xl px-6 py-3"
              style={{
                background: "#C9A45C",
                border: "1px solid rgba(29,20,16,0.16)",
                boxShadow: "0 18px 44px rgba(17,12,9,0.10)",
              }}
            >
              <CheckCircle2 className="h-5 w-5" style={{ color: "var(--emerald)" }} />
              <span className="font-semibold text-black/80">Este guia resolve isso.</span>
            </div>

            <div className="mt-10">
              <LuxCard className="mx-auto max-w-3xl overflow-hidden p-0">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/segundaDobra.png"
                    alt="[foto produto]"
                    fill
                    className="object-cover"
                  />
                </div>
              </LuxCard>
            </div>
          </div>
        </Container>
      </section>

      {/* PARA QUEM É (mantido como reforço visual, mas com copy alinhada ao PDF) */}
      <section className="section-gradient py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="lux-h text-3xl font-semibold tracking-tight md:text-4xl">
                - Aplicável para toda profissional que empreende e deseja ser protagonista da sua
                história
              </h3>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-black/70">
                <p className="text-sm md:text-base" style={{ color: "var(--muted)" }}>
                  - prático e objetivo com exercícios aplicação
                </p>
                <p className="text-sm md:text-base" style={{ color: "var(--muted)" }}>
                  - Ideal para você que está cansada de procrastinar, de se auto sabotar e ser
                  insegura
                </p>
              </div>

              <div className="mt-8">
                <PrimaryButton href={offerAnchor} variant="gold">
                  quero meu guia agora
                </PrimaryButton>
              </div>
            </div>

            <LuxCard className="overflow-hidden p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/TerceiraDobra.png"
                  alt="[FOTO DO PRODUTO]"
                  fill
                  className="object-cover"
                />
              </div>
            </LuxCard>
          </div>
        </Container>
      </section>
    </>
  );
}
