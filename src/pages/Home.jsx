import Typewriter from "typewriter-effect";
import AnimationLottie from "../components/UI/AnimationLottie";
import { Instagram, Email, LinkedIn, GithubContact } from "../assets";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  const CONTACTS = [
    {
      id: "Email",
      img: Email,
      url: "mailto:gibrantaopik@gmail.com",
    },
    {
      id: "LinkedIn",
      img: LinkedIn,
      url: "https://www.linkedin.com/in/muhamad-taopik-gibran-995289150/",
    },
    {
      id: "Github",
      img: GithubContact,
      url: "https://github.com/mgibrann",
    },
    {
      id: "Instagram",
      img: Instagram,
      url: "https://www.instagram.com/mgibrannnnn/",
    },
  ];
  const { width } = useWindowDimensions();
  const text1 = `<span>Web Developer</span>`;
  const text2 = `<span>Mobile Developer</span>`;
  const text3 = `<span>Student</span>`;
  const classTypeWritter =
    "text-light-grey text-lg md:text-xl lg:text-3xl font-medium";

  return (
    <main className="flex flex-grow flex-col-reverse justify-end md:flex-row md:justify-between items-center padding">
      <div className="w-full text-center md:w-2/5 md:text-left py-5 md:py-0">
        <h1 className="text-light-blue text-xl md:text-3xl lg:text-5xl font-bold py-0 md:py-5">
          Hi, I'm Gibran
        </h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .typeString(text1)
              .pauseFor(1000)
              .deleteChars(13)
              .typeString(text2)
              .pauseFor(1000)
              .deleteChars(16)
              .typeString(text3)
              .pauseFor(5000)
              .start();
          }}
          options={{
            loop: true,
            cursorClassName: "Typewriter__cursor " + classTypeWritter,
            wrapperClassName: classTypeWritter,
          }}
        />
        <div className="flex justify-center space-x-10 md:justify-start pt-5 md:pt-10">
          {CONTACTS.map((contact) => (
            <button onClick={() => window.open(contact.url)}>
              <img
                src={contact.img}
                alt={contact.id}
                className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 transform duration-500 hover:-translate-y-5"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 py-5 md:py-0">
        <AnimationLottie
          type="coding"
          width={width <= 768 ? "60%" : "65%"}
          height={width <= 768 ? "60%" : "65%"}
        />
      </div>
    </main>
  );
};

export default Home;
