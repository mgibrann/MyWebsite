import { useState } from "react";
import { Link } from "react-router-dom";

const CardProject = ({ id, data }) => {
  const [isHover, setIsHover] = useState(false);
  const isEven = id % 2 === 0;
  const layout = `flex flex-col md:flex-row ${
    isEven ? "" : "md:flex-row-reverse"
  } items-center pb-16`;
  const image = `w-full md:w-5/12 flex z-20 justify-center transform md:hover:scale-125 transition duration-700 md:p${
    isEven ? "r" : "l"
  }-3`;
  const color = isHover ? "grayscale-0" : "grayscale";
  const card = `w-full md:w-7/12 z-10 flex flex-col shadow-md rounded-xl px-8 py-8 transition duration-700 ease-in-out transform md:hover:-translate-y-4 md:hover:shadow-2xl`;

  return (
    <section className={layout}>
      <div className={image}>
        <img
          src="https://www.halo-lab.com/images/common/projects_section/preview-1-eb034d9b-960.webp"
          alt=""
          className="w-full bg-center transition duration-700 shadow-md md:hover:shadow-2xl"
        />
      </div>
      <div
        className={card}
        onMouseEnter={() => setIsHover((prevState) => !prevState)}
        onMouseLeave={() => setIsHover((prevState) => !prevState)}
      >
        <p className="text-light-blue text-xl md:text-xl lg:text-3xl font-bold ">
          {data.title}
        </p>
        <p className="text-justify font-medium text-light-grey text-sm md:text-lg lg:text-xl">
          {data.description}
        </p>
        <div className="cursor-pointer pt-1 pb-4 md:pt-3 md:pb-10">
          <Link
            to="/"
            className="text-light-grey font-semibold link-project pb-1 text-lg md:text-xl lg:text-2xl"
          >
            View Project
          </Link>
        </div>
        <div className={`flex transition duration-700 filter md:${color}`}>
          {data.icon.map((item) => (
            <figure key={item.id} className="flex flex-col items-center pr-3">
              <img
                className="flex-grow"
                alt={`${item.id} icon`}
                src={item.url}
                width="36px"
                height="auto"
              />
              <figcaption className="text-light-grey pt-1 text-sm md:text-base lg:text-lg">
                {item.id}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardProject;
