import "../styles/index.css";
import { Playfair, PT_Sans } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${ptSans.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta
          property="og:title"
          content="Psicóloga Janine Correa | Analista do Comportamento - ACT & FAP"
        />
        <meta
          property="og:description"
          content="Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT)."
        />
        <meta property="og:image" content="/images/metaImage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Imagem de capa do site da Psicóloga Janine Correa"
        />
        <meta property="og:site_name" content="Psicóloga Janine Correa" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicóloga Janine Correa" />
        <meta
          name="twitter:description"
          content="Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT)."
        />
        <meta name="twitter:image" content="/images/metaImage.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://psijaninecorrea.com.br" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
