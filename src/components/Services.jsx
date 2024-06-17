import PhotoFrame from "./PhotoFrame";
import { servicesContent } from "../constants";

const renderServices = () => {
  return (
    <div className="flex flex-col gap-7 w-full justify-between md:flex-row md:gap-9 lg:gap-20 xl:gap-28">
      {servicesContent.services.map((service) => (
        <div key={service.id} className="relative flex flex-col md:w-1/3 md:min-w-[210px] md:max-w-80 xl:min-w-[300px] 2xl:min-w-[375px] 3xl:min-w-[430px]">
          <h3 className="h3 mb-3 md:mb-5">{service.name}</h3>
          <p className="p text-justify leading-6 md:leading-10 mb-5 md:mb-8">{service.description}</p>
          <a href={servicesContent.moreInfo.url} className="p-2 bg-color-4 rounded-sm mt-auto self-start">
            {servicesContent.moreInfo.text}
          </a>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicios">
      <div className="h-full w-full flex justify-center items-center px-4 md:my-20 md:mt-36">
        <PhotoFrame
          imgSrc={servicesContent.banner.src}
          imgWidth={servicesContent.banner.width}
          imgHeight={servicesContent.banner.height}
          frameRounded={servicesContent.banner.frameRounded}
          frameColor={servicesContent.banner.frameColor}
          framePosition={servicesContent.banner.framePosition}>
          <div className="w-full h-full flex justify-center items-center bg-white/60 rounded-lg">
            <h2 className="h2 text-center p-4">
              {servicesContent.banner.childrenTitle}
            </h2>
          </div>
        </PhotoFrame>
      </div>
      <div className="flex flex-col p-8 md:py-0 md:my-20 lg:px-24">
        <h2 className="h2 mb-8 md:mb-16">{servicesContent.title}</h2>
        {renderServices()}
      </div>
    </section>
  );
};


export default Services;
