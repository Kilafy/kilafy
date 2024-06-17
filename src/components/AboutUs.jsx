import PhotoFrame from "./PhotoFrame";
import { aboutUsContent } from "../constants";

const renderTeamMember = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center w-full h-full my-16 md:my-36">
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
      <h2 id="nosotros" className="h2 text-center w-full p-4 bg-color-4">
        {aboutUsContent.title}
      </h2>
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
      {renderTeamMember()}
    </>
  );
};

export default AboutUs;
