import { pastProjectsContent } from "../constants";
import Slider from "react-slick";
import PhotoFrame from "./PhotoFrame";

const PastProjects = () => {
  return (
    <div className="mb-10">
      {/* This is the title box of PastProjects section */}
      <div className="my-10 flex flex-col items-center">
        <div className="h3 rounded-sm p- bg-color-4 mx inline-flex m-auto">
          {pastProjectsContent.titleFirstText}
        </div>
        <div className="h3">{pastProjectsContent.titleSecondText}</div>
      </div>

      {/* This is the container of the past projects slider */}
      <div className="w-full">
        <Slider
          dots={true}
          arrows={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          centerMode={true}
          centerPadding="110px"
          responsive= {[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "0px"
              }
            }
          ]}
          >
          {pastProjectsContent.projects.map((project) => (
            <PhotoFrame
              key={project.id}
              imgSrc={project.photo}
              imgWidth={'1024px'}
              imgHeight={'500px'}
              frameRounded="rounded-lg"
              frameColor="bg-color-1"
              framePosition="bottomLeft"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PastProjects;
