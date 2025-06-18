import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const layersRef = useRef<SVGRectElement[]>([]);
  const highlightsRef = useRef<HTMLSpanElement[]>([]);

  const scrollToOwner = () => {
    const target = document.getElementById("ownersection");
    if (target) {
      target.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth",
      });
    }
  };
  // Animação do texto + flutuação
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );
  }, []);

  // Animação das camadas (SVG)
  useEffect(() => {
    layersRef.current.forEach((layer, i) => {
      const baseHeight = 180 + i * 15;
      const amplitude = 80 + i * 10;

      gsap.to(layer, {
        attr: {
          height: baseHeight + amplitude,
          y: -amplitude / 2,
        },
        x: i % 2 === 0 ? "-=10" : "+=10",
        duration: 3 + i,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.4,
      });
    });
  }, []);

  // Anima sublinhados
  useEffect(() => {
    highlightsRef.current.forEach((el, i) => {
      const underline = el.querySelector("span");
      if (!underline) return;

      gsap.fromTo(
        underline,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1 + i * 0.4,
        }
      );
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-background overflow-hidden flex justify-center text-foreground"
    >
      {/* Ondas SVG */}
      <svg
        className="absolute w-full h-full z-20 pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          {[1, 2, 3].map((n) => (
            <linearGradient
              key={n}
              id={`cascade${n}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#eae5cb" stopOpacity={1} />
              <stop offset="100%" stopColor="#eae5cb" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {[0, 1, 2].map((_, i) => (
          <rect
            key={i}
            ref={(el) => (layersRef.current[i] = el!)}
            x="0"
            y="0"
            width="800"
            height={400}
            fill={`url(#cascade${i + 1})`}
            opacity={1}
          />
        ))}
      </svg>

      <div
        ref={textRef}
        className="relative z-30 max-w-3xl text-center md:pt-25 pt-15 px-6"
      >
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-snug">
          Um espaço de{" "}
          <Underline
            ref={(el) => (highlightsRef.current[0] = el!)}
            word="escuta,"
          />{" "}
          <Underline
            ref={(el) => (highlightsRef.current[1] = el!)}
            word="acolhimento"
          />{" "}
          e{" "}
          <Underline
            ref={(el) => (highlightsRef.current[2] = el!)}
            word="reconexão."
          />
        </h1>
        <p className="text-lg font-poppins md:text-xl leading-relaxed mx-4">
          Aqui, cada história é recebida com cuidado e atenção. Vamos construir
          juntas(os) um processo terapêutico genuíno, baseado na ciência e na
          escuta humana.
        </p>

        <div className="mt-12">
          <button
            onClick={scrollToOwner}
            className="flex items-center font-poppins justify-center mx-auto gap-3 bg-foreground text-background px-6 py-2 rounded-full text-lg transition duration-300 hover:brightness-120"
          >
            Saiba mais
            <ChevronDown className="size-6 text-background animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente para sublinhar com animação
const Underline = ({
  word,
  ref,
}: {
  word: string;
  ref: (el: HTMLSpanElement | null) => void;
}) => (
  <span ref={ref} className="relative inline-block px-1">
    <span
      className="absolute md:bottom-1 bottom-0 left-0 w-full h-[3px] bg-foreground origin-left scale-x-0"
      style={{ transformOrigin: "left" }}
    />
    {word}
  </span>
);
