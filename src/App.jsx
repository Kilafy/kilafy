import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Metodology from "./components/Metodology";
import Carrousel from "./components/Carrousel";

const App = () => {
  return (
    <>
      <div className="pt-[71px] lg:pt-[79px] bg-color-2">
        <Header />
        <Hero />
        <AboutUs />
        <Services />
        <Metodology />
        <Carrousel />
      </div>
    </>
  );
};

export default App;
