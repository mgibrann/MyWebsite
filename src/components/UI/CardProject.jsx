import { useState } from "react";
import Fade from "../../utils/Fade";

export default function CardProject({ id, data }) {
  const [isHover, setIsHover] = useState(false);
  const isEven = id % 2 === 0;
  const layout = `flex flex-col md:flex-row ${
    isEven ? "" : "md:flex-row-reverse"
  } items-center pb-16`;
  const image = `w-full md:w-5/12 flex z-20 justify-center transform md:hover:scale-125 transition duration-700 ${
    isEven ? "md:pr-2" : "md:pl-2"
  }`;
  const card = `w-full md:w-7/12 z-10 flex flex-col shadow-md rounded-xl px-4 py-4 lg:px-6 lg:py-6 transition duration-700 ease-in-out transform md:hover:-translate-y-4 md:hover:shadow-2xl`;

  return (
    <Fade
      type="section"
      ml={isEven && -100}
      mb={!isEven && -100}
      delay={id + 1 * 500}
      className={layout}
    >
      <div className={image}>
        <img
          src="https://www.halo-lab.com/images/common/projects_section/preview-1-eb034d9b-960.webp"
          alt=""
          className="w-full h-auto bg-center transition duration-700 shadow-md md:hover:shadow-2xl"
        />
      </div>
      <div
        className={card}
        onMouseEnter={() => setIsHover((prevState) => !prevState)}
        onMouseLeave={() => setIsHover((prevState) => !prevState)}
      >
        <p className="text-light-blue text-lg md:text-xl lg:text-2xl font-bold ">
          {data.title}
        </p>
        <p className="text-justify font-medium text-light-grey text-sm md:text-base lg:text-lg">
          {data.description}
        </p>
        <div className="cursor-pointer pt-2 pb-5 md:pt-3 md:pb-10">
          <a
            href="https://github.com/mgibrann"
            className="text-light-grey font-semibold link-project pb-1 text-base md:text-lg lg:text-xl"
          >
            View Project
          </a>
        </div>
        <div
          className={`flex transition duration-700 filter ${
            isHover ? "md:grayscale-0" : "md:grayscale"
          }`}
        >
          {data.icon.map((item) => (
            <figure key={item.id} className="flex flex-col items-center pr-3">
              <img
                className="flex-grow w-6 md:w-7 lg:w-9 h-auto"
                alt={`${item.id} icon`}
                src={item.url}
              />
              <figcaption className="text-light-grey pt-1 text-sm md:text-base lg:text-lg font-medium">
                {item.id}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Fade>
  );
}
