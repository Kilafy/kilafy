import { heroContent } from "../constants";

const Hero = () => {
  return (
    <div className="flex items-center h-[calc(100vh-71px)] lg:h-[calc(100vh-79px)] bg-color-3 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          <img
            src={heroContent.background}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-color-3 via-color-1/5 to-color-4/100 opacity-30"></div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full min-h-fit text-center p-8 m-8 text-color-2 z-10 bg-color-3/60 rounded-sm">
        <h1 className="h3">{heroContent.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
