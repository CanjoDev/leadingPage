/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { Container, ImageFrame, LuxCard, PrimaryButton } from "../_components/landing-ui";
import { ScrollReveal } from "../_components/scroll-reveal";

export function ThirdFold({ offerAnchor }: { offerAnchor: string }) {
  return (
    <>
      {/* O QUE É */}
      <section id="sobre" className="section-gradient">
        <div className="py-14 md:py-20">
          <ScrollReveal>
            <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <ImageFrame>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/FotoFinalSeApresentando.png"
                  alt="Kailaine Gomes"
                  fill
                  className="object-cover"
                />
              </div>
            </ImageFrame>

            <div>
              <h3 className="lux-h text-3xl font-semibold tracking-tight md:text-4xl">
                O QUE É O "DESTRAVE SUA PRESENÇA"?
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
                 Não é apenas um e-book. É uma Mentoria de Bolso. Desenvolvi um método de 7
                etapas que une Ciência Comportamental, Semiótica e Estratégia de Marca.
              </p>

              <Separator className="my-6" />

              <p className="text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
                Minha missão com este material é tirar você do modo "Performance" (tentar parecer
                alguém) e te colocar no modo "Essência" (sustentar quem você é com elegância).
              </p>

              <div className="mt-8">
                <PrimaryButton href={offerAnchor} variant="emerald">
                  chega de perder tempo - eu quero
                </PrimaryButton>
              </div>
            </div>
          </div>
            </Container>
          </ScrollReveal>
        </div>
      </section>

      {/* VOCÊ ESTÁ INVISÍVEL */}
      <section id="essencia" className="section-gradient">
        <div className="py-14 md:py-20">
          <ScrollReveal delay={90}>
            <Container>
          <div className="mx-auto max-w-5xl">
            <h3 className="lux-h text-center text-3xl font-semibold tracking-tight md:text-4xl">
              VOCÊ ESTÁ INVISÍVEL? RESGATE SUA ESSÊNCIA.
            </h3>

            <LuxCard className="mt-8 p-8 md:p-10">
              <div className="space-y-5 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                <p>
                  Você sente que tem potencial, competência e entrega resultados.. mas
                  quando a câmera liga, você trava? Quando a oportunidade vem, você a perde?
                </p>

                <p>
                  O problema não é você ou o que está ao seu redor. O problema é o ruído. Existe um
                  abismo entre quem você é de verdade e a imagem que você acha a correta a ser mostrada.
                </p>

                <p>
                  Você grava e apaga. Você se compara. Você sente a procrastinação chegar disfarçada de
                  "falta de tempo". E enquanto você pede licença para aparecer, o mercado é ocupado por
                  pessoas com menos talento, mas com mais coragem que você.
                </p>

                <p>
                  Eu sei disso porque já estive nesse lugar. Eu precisei aprender "no osso" como alinhar
                  minha Imagem, minha Mente e minha Estratégia para parar de me sabotar. E SER UMA
                  PROFISSIONAL que, acima de tudo, me auto valorizo.
                </p>

                <p>
                  E é exatamente esse caminho — sem atalhos e sem máscaras — que eu condensei neste
                  Manual.
                </p>

                <p>O jeito mais humano e acessível que encontrei de te ajudar neste ano!</p>

                <p className="pt-2 font-semibold text-[color:var(--ink)] opacity-80">
                  VOCÊ VAI PERDER ESSA OPORTUNIDADE?
                </p>

                <p className="font-semibold text-[color:var(--ink)] opacity-80">
                  E AINDA A POSSIBILIDADE DE TER UM ENCONTRO INDIVIDUAL COMIGO DE 45MIN?
                </p>
              </div>

              <div className="mt-8 text-center">
                <PrimaryButton href={offerAnchor} variant="gold">
                  JAMAIS! QUERO TUDO ISSO
                </PrimaryButton>
              </div>
            </LuxCard>
          </div>
            </Container>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
