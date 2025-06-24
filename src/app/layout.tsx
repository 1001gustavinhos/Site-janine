import "../styles/index.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
