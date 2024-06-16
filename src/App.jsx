import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoFrame from "./components/PhotoFrame";

const App = () => {
  return (
    <>
      <div className="pt-[71px] lg:pt-[79px] bg-color-2">
        <Header />
        <Hero />
        <div className="h-full w-full flex justify-center items-center p-10">
          <PhotoFrame
            imgSrc="/assets/images/IMG_19.webp"
            imgWidth="720px"
            imgHeight="480px"
            frameRounded="rounded-lg"
            frameColor="bg-color-4"
            framePosition="bottomRight"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center p-10">
          <PhotoFrame
            imgSrc="/assets/images/team/Andres_Caro.webp"
            imgWidth="720px"
            imgHeight="720px"
            frameRounded="rounded-lg"
            frameColor="bg-color-1"
            framePosition="topLeft"
          />
        </div>
      </div>
    </>
  );
};

export default App;
