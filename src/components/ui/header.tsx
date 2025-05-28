import { images } from "@/constants/images";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="md:top-7 top-0 z-20 md:left-1/2 md:py-4 py-4 w-full bg-background2">
      <Container className="flex justify-center items-center w-full h-full">
        <img
          src={images.home.logoHorizontal}
          className="w-[350px] md:block hidden"
          alt=""
        />
        <img
          src={images.home.logo}
          className="md:hidden h-[50px]"
          alt="beija"
        />
      </Container>
    </header>
  );
};
