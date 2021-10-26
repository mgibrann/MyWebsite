import { Link } from "react-router-dom";
import { Tailwind, ReactIcon, JavaScript, Github } from "../assets";

const Projects = () => {
  const iconTechStack = [
    { id: "React", icon: ReactIcon },
    { id: "Tailwind", icon: Tailwind },
    { id: "Javascript", icon: JavaScript },
  ];
  return (
    <div className="flex flex-col flex-grow padding">
      <h1 className="text-2xl md:text-6xl text-light-blue font-bold text-center pt-4 pb-8">
        Projects
      </h1>
      <section className="flex items-center">
        <div className="w-1/3 transform hover:scale-110 transition duration-500">
          <Link to="/">
            <img
              src="https://www.halo-lab.com/images/common/projects_section/preview-1-eb034d9b-960.webp"
              alt=""
              width="60%"
              height="60%"
            />
          </Link>
        </div>
        <div className="w-2/3 flex flex-col shadow-lg rounded-lg px-3 py-5">
          <p className="text-light-blue lg:text-3xl md:text-xl sm:text-lg font-bold">
            To do List App
          </p>
          <p className="text-justify text-light-grey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            reiciendis aperiam, dolorum esse impedit consequuntur iusto saepe
            est! Doloremque inventore cum mollitia nobis nemo saepe perspiciatis
            amet modi at et.
          </p>
          <div className="flex pt-5">
            {iconTechStack.map((item) => (
              <button
                key={item.id}
                class="flex items-center cursor-pointer transition duration-700 ease-in-out filter grayscale hover:grayscale-0 focus:grayscale-0 active:grayscale-0"
              >
                <img
                  alt={`${item.id} icon`}
                  src={item.icon}
                  height="45px"
                  width="45px"
                />
              </button>
            ))}
            <button className="flex bg-light-blue items-center rounded-md shadow-md py-1 px-2">
              <img alt="Github icon" src={Github} height="45px" width="45px" />
              <p className="text-light-white">See on Github</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
