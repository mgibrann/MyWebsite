import { Photo } from "../assets";
import CardJourney from "../components/UI/CardJourney";

const About = () => {
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
  return (
    <main className="flex-grow padding">
      <section className="pt-4 pb-4">
        <p className="pb-2 text-2xl md:text-6xl text-light-blue font-bold text-center border-b border-gray-300">
          About Me
        </p>
        <div className="flex flex-col items-center pt-4">
          <img
            src={Photo}
            alt="gibran"
            className="h-26 w-24 bg-light-blue rounded-full shadow-sm transform duration-700 hover:-translate-y-3.5 hover:shadow-2xl cursor-pointer"
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
      <section className="pt-4 pb-4">
        <p className="pb-3 text-2xl md:text-6xl text-light-blue font-bold text-center border-b border-gray-300">
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
    </main>
  );
};

export default About;
