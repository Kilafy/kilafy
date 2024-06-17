/* eslint-disable react/prop-types */

/**
 * Renders a photo frame component with customizable options.
 *
 * @component
 * @example
 * // Example usage of PhotoFrame component
 * <PhotoFrame
 *   imgSrc="/path/to/image.webp"
 *   imgWidth="720px"
 *   imgHeight="480px"
 *   frameRounded="rounded-lg"
 *   frameColor="bg-color-1"
 *   framePosition="topRight"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgSrc - The source URL of the image to be displayed in the frame.
 * @param {string} props.imgHeight - The height of the image in pixels.
 * @param {string} props.imgWidth - The width of the image in pixels.
 * @param {string} [props.frameRounded="rounded-lg"] - The Tailwind CSS class for the rounded corners of the frame.
 * @param {string} [props.frameColor="bg-color-1"] - The Tailwind CSS class for the background color of the frame.
 * @param {string} [props.framePosition="topLeft"] - The position of the frame within the container. Possible values are "topLeft", "topRight", "bottomLeft", and "bottomRight".
 *
 * @returns {JSX.Element} The rendered PhotoFrame component.
 */

import "./design/css/photoFrameShadows.css";

const positionClasses = {
  topLeft: {
    position: "top-[-20px] left-[-20px]",
    margin: "mt-[20px] ml-[20px]",
    shadow: "shadow-top-left",
  },
  topRight: {
    position: "top-[-20px] right-[-20px]",
    margin: "mt-[20px] mr-[20px]",
    shadow: "shadow-top-right",
  },
  bottomLeft: {
    position: "bottom-[-20px] left-[-20px]",
    margin: "mb-[20px] ml-[20px]",
    shadow: "shadow-bottom-left",
  },
  bottomRight: {
    position: "bottom-[-20px] right-[-20px]",
    margin: "mb-[20px] mr-[20px]",
    shadow: "shadow-bottom-right",
  },
};

const PhotoFrame = ({
  imgSrc,
  imgHeight,
  imgWidth,
  frameRounded = "rounded-lg",
  frameColor = "bg-color-1",
  framePosition = "topLeft",
  children,
}) => {
  const { position, margin } = positionClasses[framePosition];
  const { shadow } = positionClasses[framePosition];

  const animationClass =
    "transition duration-200 ease-in-out transform hover:scale-105";

  return (
    <div
      style={{ height: imgHeight, width: imgWidth }}
      className={`relative z-30 ${margin}`}>
      <div
        className={`absolute flex justify-center items-center w-full h-full bg-cover shadow-black ${frameRounded} ${shadow} ${animationClass}`}
        style={{ backgroundImage: `url('${imgSrc}')`, zIndex: 40 }}>
        {children}
      </div>
      <div
        className={`absolute w-full h-full ${position} ${frameColor} ${frameRounded}`}
        style={{ zIndex: 30 }}
      />
    </div>
  );
};

export default PhotoFrame;
