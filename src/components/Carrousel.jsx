import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { useMediaQuery } from "@uidotdev/usehooks";
import { pastProjectsContent } from "../constants";
import PhotoFrame from "./PhotoFrame";

const PastProjects = () => {
  const isSmOrLarger = useMediaQuery("(min-width: 640px)");
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  const isLgOrLarger = useMediaQuery("(min-width: 1024px)");
  const isXlOrLarger = useMediaQuery("(min-width: 1280px)");
  const is2XlOrLarger = useMediaQuery("(min-width: 1536px)");

  return (
    <section id="clientes" className="mb-10">
      <div className="my-10 flex flex-col items-center">
        <div className="h3 rounded-sm p- bg-color-4 mx inline-flex m-auto">
          {pastProjectsContent.titleFirstText}
        </div>
        <div className="h3">{pastProjectsContent.titleSecondText}</div>
      </div>

      <div className="w-full flex justify-center px-3 md:px-14 lg:px-20 xl:px-24 2xl:px-36">
        <Carousel
          opts={{ align: "center" }}
          orientation={isMdOrLarger ? "horizontal" : "vertical"}
          className="w-full">
          <CarouselContent className="h-[500px] md:h-auto">
            {pastProjectsContent.projects.map((project) => (
              <CarouselItem key={project.id} className="basis-auto ">
                <a href={project.url} target="_blank">
                  <div className="flex justify-center p-1 md:p-2 lg:p-3 2xl:p-4">
                    <PhotoFrame
                      imgSrc={project.photo}
                      imgWidth={
                        is2XlOrLarger
                          ? "1024px"
                          : isXlOrLarger
                          ? "850px"
                          : isLgOrLarger
                          ? "700px"
                          : isMdOrLarger
                          ? "500px"
                          : isSmOrLarger
                          ? "450px"
                          : "336px"
                      }
                      imgHeight={
                        is2XlOrLarger
                          ? "500px"
                          : isXlOrLarger
                          ? "415px"
                          : isLgOrLarger
                          ? "342px"
                          : isMdOrLarger
                          ? "244px"
                          : isSmOrLarger
                          ? "220px"
                          : "164px"
                      }
                      frameRounded="rounded-lg"
                      frameColor="bg-color-1"
                      framePosition="bottomLeft"
                    />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className={isMdOrLarger ? "" : "hidden"}>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PastProjects;
