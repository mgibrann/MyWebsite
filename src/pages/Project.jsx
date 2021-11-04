import CardProject from "../components/UI/CardProject";
import { Tailwind, ReactIcon, JavaScript } from "../assets";

const Projects = () => {
  const allProject = [
    {
      id: "React",
      title: "To do List App",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: [
        { id: "React", url: ReactIcon },
        { id: "Tailwind", url: Tailwind },
        { id: "JavaScript", url: JavaScript },
      ],
    },
    {
      id: "Tailwind",
      title: "To do List App",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: [
        { id: "React", url: ReactIcon },
        { id: "Tailwind", url: Tailwind },
        { id: "JavaScript", url: JavaScript },
      ],
    },
    {
      id: "Javascript",
      title: "To do List App",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: [
        { id: "React", url: ReactIcon },
        { id: "Tailwind", url: Tailwind },
        { id: "JavaScript", url: JavaScript },
      ],
    },
  ];

  return (
    <main className="flex flex-col flex-grow padding">
      <h1 className="text-2xl md:text-6xl text-light-blue font-bold text-center pt-4 pb-8">
        Projects
      </h1>
      {allProject.map((item, index) => (
        <CardProject key={index} id={index} data={item} />
      ))}
    </main>
  );
};

export default Projects;
