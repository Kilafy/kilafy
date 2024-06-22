import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Metodology from "./components/Metodology";
import Carrousel from "./components/Carrousel";
import ContactUs from "./components/ContactUs";
import Whatsapp from "./components/Whatsapp";

const App = () => {
  return (
    <>
      <div className="pt-[71px] lg:pt-[79px] bg-color-2">
        {/* Sticky */}
        <Whatsapp />
        <Header />

        {/* Content */}
        <Hero />
        <AboutUs />
        <Services />
        <Metodology />
        <Carrousel />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
