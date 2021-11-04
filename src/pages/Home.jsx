import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import { Coding } from "../assets";

const Home = () => {
  const text1 = `<span>Web Developer</span>`;
  const text2 = `<span>Mobile Developer</span>`;
  const text3 = `<span>Student</span>`;
  const classTypeWritter =
    "text-light-grey text-2xl md:text-3xl lg:text-4xl font-medium";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex flex-grow flex-col-reverse md:flex-row justify-around md:justify-between items-center padding">
      <div className="w-full text-center md:w-2/5 md:text-left">
        <h1 className="text-light-blue text-3xl md:text-4xl lg:text-6xl font-bold py-0 md:py-5">
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
      </div>
      <div className="w-full md:w-3/5">
        <Lottie options={defaultOptions} height={"80%"} width={"80%"} />
      </div>
    </main>
  );
};

export default Home;
