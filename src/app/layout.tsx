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

export const metadata = {
  title: {
    default: "Psi. Janine Correa",
    template: "%s | Psi. Janine Correa",
  },
  description: "Analista do Comportamento - ACT & FAP",
  metadataBase: new URL("https://psijaninecorrea.com.br  "),
  openGraph: {
    title: "Psi. Janine Correa",
    description: "Analista do Comportamento - ACT & FAP",
    url: "/",
    siteName: "Psi. Janine Correa",
    images: [
      {
        url: "/images/metaImage.jpeg", // coloque a imagem na pasta public/
        width: 1200,
        height: 630,
        alt: "Imagem de capa do site da Psi. Janine Correa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psi. Janine Correa",
    description: "Um espaço de escuta, acolhimento e transformação.",
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
        <meta name="twitter:title" content="Psi. Janine Correa" />
        <meta
          name="twitter:description"
          content="Analista do Comportamento - ACT & FAP"
        />
        <meta name="twitter:image" content="/images/metaImage.jpeg" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
