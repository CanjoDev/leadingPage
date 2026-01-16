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
    <html
      lang="pt-BR"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Set theme BEFORE paint to avoid flicker.
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const k='theme';const saved=localStorage.getItem(k);const prefers=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;const theme=(saved==='light'||saved==='dark')?saved:(prefers?'dark':'light');document.documentElement.dataset.theme=theme;}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
