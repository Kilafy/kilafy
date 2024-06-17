import PhotoFrame from "./PhotoFrame";
import cross from "/assets/elements/cross.svg";
import { aboutUsContent } from "../constants";

const renderTeamMember = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center w-full h-full my-16 mt-0 md:my-20 md:mt-0">
      {aboutUsContent.team.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center justify-center  h-full my-4">
          <PhotoFrame
            imgSrc={member.photo}
            imgWidth={aboutUsContent.teamPhotoSize.width}
            imgHeight={aboutUsContent.teamPhotoSize.height}
            frameRounded="rounded-lg"
            frameColor="bg-color-1"
            framePosition="topLeft"
          />
          <p className="p-7 pb-0 leading-6 flex flex-col items-center h-full md:pt-10 md:pb-0">
            <span className="p font-semibold">{member.name}</span>
            <span className="p">{member.role}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <section id="nosotros" className="flex flex-col">
        <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row lg:h-[500px]">
          <img
            src={aboutUsContent.sideImgSrc}
            alt={aboutUsContent.sideImgAlt}
            className="bg-color-2 lg:w-1/2 lg:h-full object-cover"
          />
          <p className="p bg-color-1 p-7 leading-6 lg:flex lg:items-center lg:h-full lg:w-1/2 lg:p-10 xl:px-16 lg:leading-10">
            {aboutUsContent.description}
          </p>
        </div>
        <h2 className="h2 text-center w-full p-4 my-16 md:my-20">
          {aboutUsContent.title}
        </h2>

        {renderTeamMember()}

        <div className="flex w-full justify-between gap-3 px-4 mb-16 md:mb-20 md:justify-center md:gap-6 lg:gap-12 xl:gap-16">
          <div className="flex justify-center items-center aspect-square w-1/3 max-h-[324px] max-w-[324px] p-12 bg-color-1 rounded-lg md:p-20 md:w-1/2">
            <img src={cross} />
          </div>
          <p className="p flex items-center w-2/3 md:w-1/2 md:leading-6 lg:leading-10">
            {aboutUsContent.teamDescription}
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
