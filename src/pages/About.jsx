import CardJourney from "../components/UI/CardJourney";
import { Photo, JavaScript, Github, Tailwind, ReactIcon } from "../assets";

const About = () => {
  const SKILLS = [
    {
      id: "Javascript",
      img: JavaScript,
    },
    {
      id: "React",
      img: ReactIcon,
    },
    {
      id: "Tailwind",
      img: Tailwind,
    },
    {
      id: "Github",
      img: Github,
    },
  ];
  const JOURNEYS = [
    {
      date: "Jan 2021 - Apr 2021",
      position: "Mobile Developer - PT. Fana Baka Teknologi",
      description:
        "Build financial record app using React Native and publish to Google Play Store. Slicing design prototype company app.",
    },
    {
      date: "2018 - Expected 2022",
      position: "Computer Engineering - Diponegoro University",
      description: "Becoming Assitant Lab",
    },
    {
      date: "2020 - 2021",
      position:
        "head of division social - Computer Engineering Student Association",
      description:
        "Overseeing the Fundraising work program for victims of natural disasters and orphanage visits.",
    },
    {
      date: "2019 - 2020",
      position: "Staff Social - Computer Engineering Student Association",
      description:
        "Responsible for the Fundraising work program for victims of natural disasters .",
    },
    {
      date: "2019 - 2020",
      position: "Staff - Computer Engineering Student spiritual Association",
      description:
        "Mandated as the person in charge of the jacket-making work program.",
    },
  ];
  const CERTIFICATES = [
    {
      from: "Udemy",
      title: "The Complete React Native + Hooks Course",
      file: "https://drive.google.com/file/d/1l_uhI8g7YUuMx2Ar08aq7Uzhi7mD0-uC/view?usp=sharing",
    },
    {
      from: "Udemy",
      title: "Full-Stack React Native Developer",
      file: "https://drive.google.com/file/d/1l_uhI8g7YUuMx2Ar08aq7Uzhi7mD0-uC/view?usp=sharing",
    },
    {
      from: "Digital Talent Scholarship",
      title: "HTML, CSS, JavaScript Program Online Academy 2020",
      file: "https://drive.google.com/file/d/1l_uhI8g7YUuMx2Ar08aq7Uzhi7mD0-uC/view?usp=sharing",
    },
    {
      from: "Dicoding",
      title: "Learn basic web programming",
      file: "https://drive.google.com/file/d/1l_uhI8g7YUuMx2Ar08aq7Uzhi7mD0-uC/view?usp=sharing",
    },
  ];

  return (
    <main className="flex-grow padding">
      <section className="pt-4 pb-4">
        <p className="pb-2 text-2xl md:text-5xl text-light-blue font-bold text-center border-b border-gray-300">
          About Me
        </p>
        <div className="flex flex-col items-center pt-4">
          <img
            src={Photo}
            alt="gibran"
            className="h-25 w-24 bg-light-blue rounded-full shadow-sm transform duration-700 hover:scale-150 hover:shadow-2xl cursor-pointer hover:z-40"
          />
          <p className="text-light-grey font-semibold mt-2 mb-5 transform duration-300 hover:text-light-blue">
            Muhamad Taopik Gibran
          </p>
          <p className="lg:text-xl text-justify text-light-grey font-medium">
            A software developer who has a high interest in website and mobile
            development. Usually use JavaScript language and experience using
            Reactjs, React Native, Next js, and Tailwindcss. Has a dream to
            become a great developer. Likes to learn new stuff.
          </p>
        </div>
      </section>
      <section className="pt-4 pb-4 ">
        <p className="pb-3 text-2xl md:text-5xl text-light-blue font-bold text-center border-b border-gray-300">
          Skills
        </p>
        <div className="flex justify-evenly pt-5">
          {SKILLS.map((skill) => (
            <span className="flex flex-col items-center text-light-grey font-medium transform duration-500 hover:-translate-y-7">
              <span className="h-10 w-10">
                <img src={skill.img} alt="react" />
              </span>
              {skill.id}
            </span>
          ))}
        </div>
      </section>
      <section className="pt-4 pb-4">
        <p className="pb-3 text-2xl md:text-5xl text-light-blue font-bold text-center border-b border-gray-300">
          Journey
        </p>
        {JOURNEYS.map((journey, index) => (
          <CardJourney
            key={index}
            date={journey.date}
            position={journey.position}
            description={journey.description}
          />
        ))}
      </section>
      <section className="pt-4 pb-4">
        <p className="pb-3 text-2xl md:text-5xl text-light-blue font-bold text-center border-b border-gray-300">
          Certificates
        </p>
        {CERTIFICATES.map((certif, index) => (
          <div className="flex py-1 items-center" key={index}>
            <div className="bg-light-blue w-4 h-4 rounded-lg absolute" />
            <p className=" text-light-grey font-bold text-sm pl-5">
              {certif.title} -
              <span
                className="text-light-blue cursor-pointer"
                onClick={() => window.open(certif.file)}
              >
                {" " + certif.from}
              </span>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
