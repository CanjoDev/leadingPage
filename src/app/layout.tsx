import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const heading = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destrave sua Presença em 7 dias | Kailaine Gomes",
  description:
    "O guia definitivo para você se tornar inconfundível, inesquecível e ocupar o seu lugar no mundo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
