import "../styles/index.css";
import { Playfair, PT_Sans } from "next/font/google";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: {
    default: "Psicóloga Janine Correa",
    template: "%s | Psi. Janine Correa | Analista do Comportamento - ACT & FAP",
  },
  description:
    "Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT).",
  metadataBase: new URL("https://psijaninecorrea.com.br"),
  openGraph: {
    title: "Psicóloga Janine Correa | Analista do Comportamento - ACT & FAP",
    description:
      "Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT).",
    url: "/",
    siteName: "Psicóloga Janine Correa",
    images: [
      {
        url: "/images/metaImage.jpeg", // coloque a imagem na pasta public/
        width: 1200,
        height: 630,
        alt: "Imagem de capa do site da Psicóloga Janine Correa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Janine Correa",
    description:
      "Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT).",
    images: ["/images/metaImage.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${ptSans.variable}`}>
      <head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Psicóloga Janine Correa | Analista do Comportamento - ACT & FAP"
        />
        <meta
          name="twitter:description"
          content="Sou Psicóloga Formada pela Unesp em 2018, atuo com o atendimento clinico de adultos desde a conclusão da minha graduação e adoto como abordagem a Terapia Comportamental. Também tenho especialização em Psicoterapia Analítica Funcional (FAP) e em Terapia de aceitação e compromisso (ACT)."
        />
        <meta name="twitter:image" content="/images/metaImage.jpeg" />
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
