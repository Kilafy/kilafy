import { heroContent } from "../constants";

const Hero = () => {
  return (
    <div className="flex items-center h-[calc(100vh-71px)] lg:h-[calc(100vh-79px)] bg-color-3 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <img
            src={heroContent.background}
            alt={heroContent.backgroundAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-color-3 via-color-1/5 to-color-4/100 opacity-30"></div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full min-h-fit text-center py-8 px-4 m-4 text-color-2 z-10 bg-color-3/60 rounded-sm md:p-8 md:m-8">
        <h1 className="h1">{heroContent.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
