import { Container } from "./container";
import { socialIcons } from "@/constants/socialIcons";
import { images } from "@/constants/images";
import { handleContact } from "@/lib/utils";

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
              target="_blank"
            >
              +55 (11) 93323-1296
            </button>
          </div>
          <div className="flex flex-col gap-1.5"></div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center sm:items-end md:border-t-2 border-t-1 justify-center sm:justify-end gap-2 sm:gap-0">
          {/* <a className="sm:pr-4 sm:border-r-2 font-light font-josefin block ">
            Política de privacidade
          </a>
          <a className="sm:pl-4 font-light font-josefin block">Termos de uso</a> */}
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
