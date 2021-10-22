import { Link } from "react-router-dom";
import Tailwind from "../assets/tailwind-css.svg";

const Projects = () => {
  return (
    <div className="flex flex-col flex-grow px-20">
      <h1 className="text-6xl text-light-blue font-bold text-center pt-4 pb-8">
        Projects
      </h1>
      <section className="flex">
        <div className="w-1/3 flex flex-col justify-evenly">
          <p className="text-light-blue text-4xl font-bold">To do List App</p>
          <Link to="/" className="text-lg link-project">
            View Project
          </Link>
          <div className="flex gap-6">
            <figure class="flex flex-col items-center">
              <img alt="Figma icon" src={Tailwind} height="36px" width="36px" />
              <figcaption class="text-light-blue text-sm font-semibold pt-2">
                Tailwind
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center">
              <img alt="Figma icon" src={Tailwind} height="36px" width="36px" />
              <figcaption class="text-light-blue text-sm font-semibold pt-2">
                Tailwind
              </figcaption>
            </figure>
            <figure class="flex flex-col items-center">
              <img alt="Figma icon" src={Tailwind} height="36px" width="36px" />
              <figcaption class="text-light-blue text-sm font-semibold pt-2">
                Tailwind
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="transform hover:scale-75 transition duration-500">
          <Link to="/">
            <img
              src="https://www.halo-lab.com/images/common/projects_section/preview-1-eb034d9b-960.webp"
              alt=""
              width="60%"
              height="60%"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
