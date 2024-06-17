import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoFrame from "./components/PhotoFrame";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <div className="pt-[71px] lg:pt-[79px] bg-color-2">
        <Header />
        <Hero />
        <AboutUs />
        <div className="h-full w-full flex justify-center items-center">
          <PhotoFrame
            imgSrc="/assets/images/IMG_19.webp"
            imgWidth="720px"
            imgHeight="480px"
            frameRounded="rounded-lg"
            frameColor="bg-color-4"
            framePosition="bottomRight"
          />
        </div>
      </div>
    </>
  );
};

export default App;
