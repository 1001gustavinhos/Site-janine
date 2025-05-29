import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

import { images } from "@/constants/images";
import { cn, handleContact, handleContactFullbanerOnline } from "@/lib/utils";

import {
  BadgeCheck,
  Brain,
  GraduationCap,
  SparkleIcon,
  type LucideIcon,
} from "lucide-react";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <OwnerSection />
        <CertificationSection />
        <DifferencesSection />
        <FullBanner />
        <WhatsAppBadge />
      </main>

      <Footer />
    </>
  );
};

export const BannerSection = () => {
  return (
    <section className="w-full max-w-[1440px] md:px-7 px-2 md:aspect-[77/40] m-auto">
      <div className="aspect-[77/40] w-full relative md:rounded-[60px] rounded-2xl overflow-hidden md:justify-normal justify-end md:py-16 h-full">
        <div className="absolute w-full h-full top-0 left-0 after:bg-gradient-to-t after:from-black/60 after:to-transparent after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 md:after:hidden">
          {/* <img
            loading="lazy"
            className="w-full h-full object-cover brightness-70 md:hidden"
            src={images.home.banner}
            width={'auto'}
            height={'auto'}
            alt=""
          /> */}
          <img
            loading="lazy"
            className="w-full h-full object-cover md:brightness-90 md:block"
            src={images.home.banner2}
            width={"auto"}
            height={"auto"}
            alt=""
          />
        </div>

        <Container className="relative flex flex-col md:justify-center justify-end h-full">
          <h1 className="md:text-[42px] font-clash-grotesk text-[22px] max-w-[500px] text-background pb-2 md:pb-6 leading-[132%]">
            Nutrição da vida real: energia, disciplina, clareza e qualidade de
            vida.
          </h1>
          <div className="flex md:flex-col md:gap-5 pb-4">
            <p className="w-full max-w-[461px] text-start md:text-2xl font-light text-background">
              Tudo aliado a muita ciência e propósito.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

interface ImageSectionProps {
  title: string;
  text: string;
  imageBackground: string;
  inverted?: boolean;
}

export const ImageSection = ({
  title,
  text,
  imageBackground,
  inverted = false,
}: ImageSectionProps) => {
  return (
    <section className={"py-24"}>
      <Container className="flex gap-3 md:items-center flex-col md:flex-row justify-between">
        <h2
          className={cn(
            "md:text-[40px] text-[25px] justify-start md:hidden",
            inverted && "md:text-right"
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            " w-full md:max-w-[413px] mx-auto md:h-[360px] rounded-3xl overflow-hidden",
            inverted && "md:order-last"
          )}
        >
          <img
            loading="lazy"
            src={imageBackground}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className={"w-full max-w-[512px] flex flex-col gap-6"}>
          <h2
            className={cn(
              "text-[40px] text-start justify-start md:block hidden"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-xl hyphens-auto text-justify w-full"
            )}
          >
            {text}
          </p>
        </div>
      </Container>
    </section>
  );
};

export const OwnerSection = () => {
  return (
    <section className="py-8 md:bg-none bg-linear-to-b from-background2 from-10% to-background to-90% md:py-24 ">
      <Container className="flex flex-col  md:flex-row  justify-between">
        <div className="rounded-3xl overflow-hidden  mx-auto  md:mx-0  w-full max-w-[410px]">
          <img
            loading="lazy"
            src={images.home.about}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col  mx-auto md:mx-0 max-w-[524px] gap-6">
          <div className="flex flex-col">
            <h1 className="md:text-[40px] text-[25px] text-footer-background pt-2 leading-[100%] text-center md:text-start">
              Psi. Janine Coelho Correa
            </h1>

            <h2 className="font-poppins text-center md:text-start py-1 font-light text-xl">
              Psicóloga Analista do Comportamento - ACT & FAP
            </h2>
            <span className="font-medium text-center md:text-start">
              CRP 06/ 154012
            </span>
          </div>

          <blockquote className="font-poppins pl-3 border-l-2 text-justify font-light hyphens-auto">
            “Cada processo terapêutico é conduzido com base em escuta ativa,
            vínculo terapêutico e intervenções fundamentadas em evidências
            científicas. Aqui, você não encontra fórmulas prontas — encontra
            acolhimento real, ciência aplicada e um espaço pensado para você ser
            quem é, com segurança e respeito. ”
          </blockquote>

          <p className="font-poppins text-justify font-light hyphens-auto">
            Seja bem-vindo(a)! Este é um espaço criado com cuidado para você
            conhecer mais sobre meu trabalho como psicóloga, minhas abordagens
            terapêuticas e como podemos caminhar juntos(as) em direção ao seu
            bem-estar emocional. Se você está em busca de um espaço de escuta,
            acolhimento e transformação, fico feliz que esteja aqui. Caso surjam
            dúvidas ou você deseje agendar uma primeira conversa, estou à
            disposição.
          </p>
          <button
            onClick={handleContactFullbanerOnline}
            className="cursor-pointer font-poppins px-4 py-2 max-w-xs md:text-base text-sm bg-foreground text-white rounded-full hover:opacity-50 transition-all"
          >
            Fale comigo
          </button>
        </div>
      </Container>
    </section>
  );
};

export const FullBanner = () => {
  return (
    <section
      // ref={sectionRef}
      className="relative w-full md:h-[618px] sm:h-[320px] h-[300px] bg-black overflow-hidden"
    >
      <div className="absolute pointer-events-none top-0 left-0 w-full h-full overflow-hidden">
        <img
          // ref={imgRef}
          className="w-full h-full object-cover brightness-70 duration-200 ease-out "
          src={images.home.books}
          loading="lazy"
          alt=""
        />
      </div>

      <Container className="relative z-10 flex flex-col justify-center gap-6 h-full pointer-events-none">
        <h2 className="md:text-[40px] text-[25px] max-w-[75%] font-clash-grotesk text-white md:max-w-[489px] leading-[100%] pointer-events-auto">
          Você merece um espaço de acolhimento.
        </h2>
        <p className="text-xl font-poppins text-[15px] max-w-[75%] text-white w-full md:max-w-[489px] pointer-events-auto">
          A terapia é um convite para olhar para si com mais compreensão e menos
          cobrança. Se você sente que é hora de se cuidar, estou aqui para
          caminhar ao seu lado.
        </p>
        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={handleContactFullbanerOnline}
            className="cursor-pointer font-poppins uppercase px-4 py-2 md:text-sm text-xs bg-background text-foreground rounded-full hover:opacity-50 transition-all"
          >
            Fale comigo
          </button>
        </div>
        {/* <p className="md:text-xl text-xs font-light font-poppins text-white text-center pt-3 md:hidden">
          Atendimento de excelência, presencial ou online, com base em ciência,
          tecnologia e escuta ativa — para resultados reais em performance e
          composição corporal.
        </p> */}
      </Container>
    </section>
  );
};

export const CertificationSection = () => {
  return (
    <Container>
      <section className="py-8 md:py-12 gap-6">
        <div className="mb-4 flex flex-col md:flex-row items-center gap-y-8 md:justify-between text-center">
          <div className="max-w-2xs p-4 bg-background2 rounded-4xl space-y-1">
            <div className="flex justify-center items-center">
              <GraduationCap size={64} className="text-foreground" />
            </div>
            <h2 className="text-base  mb-4">
              <span className="text-xl text-foreground">
                Formação acadêmica
              </span>{" "}
              <br />
              <br />
              Graduada em Psicologia pela UNESP - Bauru com foco em Análise do
              Comportamento.
            </h2>
          </div>
          <div className="max-w-2xs p-4 bg-background2 rounded-4xl space-y-1">
            <div className="flex justify-center items-center">
              <BadgeCheck size={64} className="text-foreground" />
            </div>
            <h2 className="text-base mb-4">
              <span className="text-xl text-foreground">Especializações</span>{" "}
              <br />
              <br />
              Certificação em ACT (Terapia de Aceitação e Compromisso) e FAP
              (Psicoterapia Analítica Funcional).
            </h2>
          </div>
          <div className="max-w-2xs p-4 bg-background2 rounded-4xl space-y-1">
            <div className="flex justify-center items-center">
              <Brain size={64} className="text-foreground" />
            </div>
            <h2 className="text-base ">
              <span className="text-xl text-foreground">Foco de atuação</span>{" "}
              <br />
              <br /> Atendimento a adultos por meio de abordagens baseadas em
              evidências científicas há mais de 8 anos.
            </h2>
          </div>
        </div>
      </section>
    </Container>
  );
};

export const DifferencesSection = () => {
  return (
    <section className="py-8 md:py-24">
      <Container className="flex flex-col gap-4 md:gap-8 relative">
        <h2 className="text-[25px] md:text-[40px]">Sobre o atendimento</h2>
        <div className="flex gap-8">
          <Accordion className="gap-4 flex-col flex flex-1" type="multiple">
            <DifferencesItem
              value={"1"}
              title="Por que o atendimento online?"
              icon={SparkleIcon}
              text="O atendimento online proporciona mais conforto, flexibilidade e acessibilidade. 
              Você pode realizar suas sessões de onde estiver, sem deslocamentos. 
              A terapia online é segura, sigilosa e tem eficácia comprovada por diversos estudos."
            />
            <DifferencesItem
              value={"2"}
              title=" Quais são os requisitos para a sessão online?"
              icon={SparkleIcon}
              text="Você vai precisar de um local reservado e tranquilo, conexão estável com a internet, 
              um dispositivo com câmera e microfone, e um link que será enviado antes da sessão. 
              Fones de ouvido são recomendados para mais privacidade."
            />
            <DifferencesItem
              value={"3"}
              title="Quem deve fazer terapia?"
              icon={SparkleIcon}
              text="A terapia é para todos que desejam se conhecer melhor, lidar com emoções, 
              desenvolver habilidades ou atravessar momentos difíceis. 
              Você não precisa estar em crise para procurar ajuda."
            />
            <DifferencesItem
              value={"4"}
              title="Qual é o público atendido?"
              icon={SparkleIcon}
              text="Atendo adultos a partir de 18 anos, com demandas relacionadas a ansiedade, 
              estresse, autoestima, relacionamentos, transições de vida e mais. 
              Cada acompanhamento é personalizado, respeitando sua história e necessidades."
            />
            <DifferencesItem
              value={"5"}
              title="O que acontece na primeira sessão?"
              icon={SparkleIcon}
              text="A primeira sessão é um espaço de acolhimento e escuta. É o momento em que você pode contar, no seu tempo, o que te trouxe até aqui. Também é quando a psicóloga vai explicar como funciona o processo terapêutico, esclarecer dúvidas e combinar aspectos práticos, como frequência dos encontros. Não é necessário 'saber por onde começar' — a conversa é conduzida com sensibilidade, e não há pressa nem cobranças."
            />

            <DifferencesItem
              value={"6"}
              title="É seguro fazer terapia online?"
              icon={SparkleIcon}
              text="Sim, a terapia online é segura quando realizada por profissionais devidamente registrados e com os cuidados necessários. As plataformas utilizadas são escolhidas com critério, priorizando a privacidade e o sigilo das informações compartilhadas. Além disso, o atendimento online é regulamentado pelo Conselho Federal de Psicologia, o que garante respaldo ético e técnico à prática."
            />

            <DifferencesItem
              value={"7"}
              title="O que acontece com minhas informações pessoais?"
              icon={SparkleIcon}
              text="Todas as informações compartilhadas em sessão são protegidas por sigilo profissional, conforme previsto no Código de Ética da Psicologia. Seus dados pessoais, históricos e relatos são tratados com absoluto cuidado, e nunca são compartilhados com terceiros. O ambiente da terapia é seguro, e a confidencialidade é uma prioridade em todo o processo."
            />
            {/* <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem> */}
          </Accordion>
          <div className="hidden md:block w-[410px] h-[544px] sticky top-3">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={images.home.plant}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const DifferencesItem = ({
  title,
  text,
  icon,
  value,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  value: string;
}) => {
  const Icon = icon;

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex gap-6 items-center">
          <Icon size={32} />
          <div className="flex flex-col">
            <h3 className="font-medium">{title}</h3>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="pt-6 font-poppins font-light text-justify hyphens-auto px-2">
          {text}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

export const WhatsAppBadge = () => {
  return (
    <div className="w-full sticky bottom-4">
      <div className="max-w-[1920px] w-full h-0 absolute pointer-events-none z-50 left-1/2 -translate-x-1/2">
        <div className="-translate-y-full right-4 absolute -top-4  w-20 h-20 flex items-center justify-center hover:[&>button]:w-18 hover:[&>button]:h-18 pointer-events-auto">
          <button
            className="w-full h-full flex items-center justify-center bg-foreground rounded-full transition-all cursor-pointer hover:opacity-80"
            onClick={handleContact}
            rel="noopener noreferrer"
          >
            <svg
              className="size-6 my-auto text-primary-foreground md:flex"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
