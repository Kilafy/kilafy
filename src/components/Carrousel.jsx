import { pastProjectsContent } from "../constants";
import Slider from "react-slick";
import PhotoFrame from "./PhotoFrame";

const PastProjects = () => {
  return (
    <div>
      {/* This is the title box of PastProjects section */}
      <div className="my-10 flex flex-col items-center">
        <div className="h3 rounded-sm p- bg-color-4 mx inline-flex m-auto">
          {pastProjectsContent.titleFirstText}
        </div>
        <div className="h3">{pastProjectsContent.titleSecondText}</div>
      </div>

      {/* This is the container of the past projects slider */}
      <div>
        <Slider
          dots={true}
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          centerMode={true}
          centerPadding="0px"
          adaptiveHeight={true}
        >
          {pastProjectsContent.projects.map((project) => (
            <PhotoFrame
              key={project.id}
              imgSrc={project.photo}
              imgWidth={500}
              imgHeight={500}
              frameRounded="rounded-lg"
              frameColor="bg-color-1"
              framePosition="topLeft"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PastProjects;
