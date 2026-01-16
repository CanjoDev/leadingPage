"use client";

import { Badge } from "@/components/ui/badge";

import { Gift, ShieldCheck, Sparkles } from "lucide-react";

import {
  Container,
  Highlight,
  LuxCard,
  PrimaryButton,
} from "../_components/landing-ui";
import { ScrollReveal } from "../_components/scroll-reveal";

export function SecondFold({
  checkoutLink,
  offerAnchor,
}: {
  checkoutLink: string;
  offerAnchor: string;
}) {
  return (
    <>
      {/* CONTEÚDO */}
      <section id="conteudo" className="section-gradient">
        <div className="py-14 md:py-20">
          <ScrollReveal>
            <Container>
          <div className="mb-10 text-center">
            {/* ALTERADO: título 1:1 do PDF */}
            <h3 className="lux-h text-3xl font-semibold tracking-tight md:text-4xl">
              O QUE VOCÊ VAI DOMINAR EM <Highlight>7 DIAS</Highlight>:
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                n: "01",
                t: "ALINHAMENTO INTERNO",
                d: "O fim da autossabotagem. DESTRAVA limpando a bagunça mental e tendo clareza de propósito antes de qualquer coisa na vida.",
              },
              {
                n: "02",
                t: "O INVISÍVEL QUE GRITA",
                d: "Domínio da Imagem e Postura. A regra dos 7 segundos para transmitir autoridade sem dizer uma palavra; e desenvolver consciência corporal para DESTRAVAR sua mentalidade.",
              },
              {
                n: "03",
                t: "A ALMA DA MARCA",
                d: "Descubra seu Arquétipo Dominante. Pare de copiar e comece a se posicionar de forma autêntica, DESTRAVE sua PERSONALIDADE.",
              },
              {
                n: "04",
                t: "ESTRATÉGIA SEM PESO",
                d: "Como ter clareza de marca, definir sua promessa e seu público e sentir segurança na hora de vender seu peixe; DESTRAVE sua marca pessoal.",
              },
              {
                n: "05",
                t: "COMUNICAÇÃO MAGNÉTICA",
                d: "Aprenda técnicas validadas de voz, ritmo e gestos. Fale com a segurança de quem sabe o valor que tem. DESTRAVE sua comunicação",
              },
              {
                n: "06",
                t: "O DIGITAL SEM MÁSCARAS",
                d: "Posicionamento real no Instagram. Como ter constância sem precisar expor sua privacidade. DESTRAVE sua presença no Digital",
              },
            ].map((i) => (
              <LuxCard key={i.n} className="p-6">
                <div className="flex items-center gap-3">
                  <Badge
                    className="rounded-xl"
                    style={{
                      background: "rgba(15,109,82,0.10)",
                      color: "rgba(15,109,82,0.92)",
                      border: "1px solid rgba(15,109,82,0.22)",
                    }}
                  >
                    {i.n}.
                  </Badge>
                  <p className="text-lg font-semibold text-[color:var(--ink)]">{i.t}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                  {i.d}
                </p>
              </LuxCard>
            ))}

            <LuxCard className="p-7 md:col-span-2">
              <p className="text-sm font-semibold text-[color:var(--muted)]">07.</p>
              <p className="lux-h mt-1 text-lg font-semibold text-[color:var(--ink)]">
                A ROTA 2026: O plano prático para você entrar em 2026 como uma PRESENÇA forte,
                autoconfiante, que DOMINA sua presença e não se sabota..
              </p>
              <div className="mt-6">
                <PrimaryButton href={offerAnchor} variant="emerald">
                  quero meu guia
                </PrimaryButton>
              </div>
            </LuxCard>
          </div>
            </Container>
          </ScrollReveal>
        </div>
      </section>

      {/* BÔNUS */}
      <section id="bonus" className="section-gradient">
        <div className="py-14 md:py-20">
          <ScrollReveal delay={80}>
            <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="lux-h text-3xl font-semibold tracking-tight md:text-4xl">
                LEVANDO HOJE, VOCÊ GANHA <Highlight>PRESENTES EXCLUSIVOS</Highlight>:
              </h3>

              <div className="mt-6 space-y-3">
                <p className="text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                  Além do Guia Destrave sua Presença em 7 dias, você leva de PRESENTE:​
                </p>
{[{
  kind: "sparkles",
  text: "- 7 Rituais de aplicação para moldar seus hábitos + 7 exercícios práticos para te destravar - um para cada capítulo do livro.",
},
{
  kind: "gift",
  text: "🎁 BÔNUS 1: Aula - Psicologia das Cores aplicada à Imagem (desperte sensações e sentimentos no seu público)",
},
{
  kind: "gift",
  text: "🎁 BÔNUS 2: Guia Visual - Universo Arquetípico (um guia completo para mergulhar no poder do arquétipos e ativar o seu de forma poderosa)",
},
{
  kind: "gift",
  text: "🎁 BÔNUS 3: Oferta especial do Teste de Arquétipo Dominante (descubra sua personalidade arquetípica em 10 min).",
},
{
  kind: "gift",
  text: "🎁 BÔNUS OURO: Acesso  a uma Sessão Estratégica de 45min comigo (ao vivo - você e eu) para destravar  seu 2026 de uma vez por todas  (válida só para quem concluir os exercícios)",
}].map((item) => {
  const Icon = item.kind === "sparkles" ? Sparkles : Gift;

  // pega "BÔNUS X:" e separa do restante pra negritar só essa parte
  // const match = item.text.match(/(BÔNUS\s*\d+:)(.*)/i);
  const match = item.text.match(/(BÔNUS\s*(?:\d+|OURO):)(.*)/i);

  return (
    <div key={item.text} className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl"
        style={{
          background: "rgba(15,109,82,0.10)",
          border: "1px solid rgba(15,109,82,0.22)",
        }}
      >
        <Icon
          className="h-4 w-4"
          style={{ color: "var(--emerald)" }}
        />
      </span>

      <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)]">
        {match ? (
          <>
            <span className="font-semibold">{match[1]}</span>
            {match[2]}
          </>
        ) : (
          item.text
        )}
      </p>
    </div>
  );
})}

              </div>

              <div className="mt-8">
                <PrimaryButton href={offerAnchor} variant="gold">
                  Quero tudo isso
                </PrimaryButton>
              </div>
            </div>

            <div className="hidden md:block">
              <LuxCard className="p-6">
                <p className="text-sm font-semibold text-[color:var(--ink)]">OBSERVAÇÃO:</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                  esses exercícios eu aplico nas minhas mentoradas e vão destravar a sua presença.
                </p>
              </LuxCard>
            </div>
          </div>
            </Container>
          </ScrollReveal>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="section-gradient">
        <div className="py-14 md:py-20">
          <ScrollReveal delay={120}>
            <Container>
<h2 className="lux-h mb-6 text-center text-2xl md:text-3xl font-semibold tracking-[0.35em] uppercase text-[color:var(--ink)] opacity-80">
  Simples • Direto • Poderoso
</h2>

   <div className="flex justify-center">
  <div
    className="w-full max-w-2xl rounded-3xl p-[1px] shadow-[0_28px_70px_rgba(29,20,16,0.18)]"
    style={{
      background:
        "linear-gradient(180deg, rgba(29,20,16,0.26), rgba(123,16,32,0.16), rgba(15,109,82,0.14))",
    }}
  >
    <div
      className="rounded-3xl p-10 text-center border border-white/10"
      style={{
        background: "linear-gradient(180deg, #E8DED2,#E8DED2)",
        backdropFilter: "blur(100px)",
      }}
    >
      <p className="lux-h text-xl font-semibold text-[color:var(--emerald)]">
        Oferta especial (a menor do ano)
      </p>

      <p className="mt-4 text-sm text-[color:var(--taupe)]">
        De R$ 147,00 por apenas
      </p>

      <p
        className="mt-3 text-4xl md:text-5xl font-semibold"
        style={{ color: "var(--bordo)" }}
      >
        R$ 9,90
      </p>

      <p className="mt-2 text-sm text-[color:var(--taupe)]">
        à vista
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[color:var(--muted)]">
        <ShieldCheck className="h-4 w-4" style={{ color: "var(--emerald)" }} />
        <span style={{ color: "var(--taupe)" }}>Produto digital • acesso imediato</span>
      </div>

      <PrimaryButton
        href={checkoutLink}
        variant="emerald"
        className="mt-7 w-full"
      >
        Quero meu guia agora
      </PrimaryButton>
    </div>
  </div>
</div>
            </Container>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
