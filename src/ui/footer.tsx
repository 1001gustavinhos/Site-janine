import { Container } from "./container";
import { socialIcons } from "@/constants/socialIcons";
import { images } from "@/constants/images";
import Image from "next/image";
import { handleContact } from "@/lib/utils";

const WHATSAPP_LINK_DEV = `https://www.gasad.com.br/`;

export const Footer = () => {
  return (
    <footer className="w-full py-16 bg-footer-background text-background2">
      <Container className="flex flex-col justify-center gap-6 md:gap-8">
        <div className="flex justify-center  gap-4 md:gap-0">
          <img src={images.home.logoHorizontal2} className="w-[350px]" alt="" />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:text-start text-center">
          <div className="flex flex-col text-center justify-center">
            <h2 className="font-light text-lg mb-3 text-background2 font-sans">
              Contato
            </h2>
            <button
              onClick={handleContact}
              className="font-light font-sans block cursor-pointer hover:underline"
              aria-label="mandar mensagem para Janine Correa"
            >
              +55 (11) 93323-1296
            </button>
          </div>
          <div className="flex flex-col gap-1.5"></div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-background2">Site desenvolvido por:</span>
          <a
            href={WHATSAPP_LINK_DEV}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Fale com o desenvolvedor via WhatsApp"
          >
            <Image
              src="/images/devDantas2.png"
              alt="Logo do desenvolvedor"
              width={150}
              height={50}
              className="max-w-xs"
            />
          </a>
        </div>

        <div className="flex flex-col gap-1.5 items-center text-center text-sm md:text-base">
          <span className="font-light font-sans">
            Copyright © {new Date().getFullYear()} - todos os direitos
            reservados
          </span>
        </div>
      </Container>
    </footer>
  );
};

export const SocialIcons = ({ className = "", iconSize = 6 }) => {
  // Definindo classes de tamanho fixas
  const sizeClasses =
    {
      4: "w-4 h-4",
      5: "w-5 h-5",
      6: "w-6 h-6",
      7: "w-7 h-7",
      8: "w-8 h-8",
    }[iconSize] || "w-6 h-6";

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialIcons.map((icon) => (
        <a
          key={icon.name}
          href={icon.url || "#"} // Adicione URLs reais aqui
          aria-label={icon.name}
          className="text-current hover:opacity-75 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={`${sizeClasses} fill-current`}
            viewBox={icon.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
};
