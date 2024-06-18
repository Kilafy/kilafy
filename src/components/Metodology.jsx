import { metodologyContent } from "../constants";

const Metodology = () => {
  return (
    <div className="p-8 mt-8 text-justify bg-color-1 lg:p-16 lg:mt-36">
      <div className="h-[2px] w-full bg-color-3" />
      {metodologyContent.map((phase, i) => (
        <div key={phase.id} className="my-5 lg:my-9">
          <div className="px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4">
              <h3 className="h3 md:flex-shrink-0 md:w-2/5 xl:w-2/6">
                {phase.phaseName}
              </h3>
              <p className="p md:flex-grow">{phase.description}</p>
            </div>
            {i !== metodologyContent.length - 1 && (
              <div className="h-[1px] w-full bg-color-3 my-4 lg:my-9" />
            )}
          </div>
        </div>
      ))}
      <div className="h-[2px] w-full bg-color-3" />
    </div>
  );
};

export default Metodology;
