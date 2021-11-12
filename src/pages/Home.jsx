import Typewriter from "typewriter-effect";

import { CardContact, AnimationLottie } from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { CONTACTS } from "../utils/data";
import Fade from "../utils/Fade";

export default function Home() {
  const { width } = useWindowDimensions();
  const text1 = `<span>Web Developer</span>`;
  const text2 = `<span>Mobile Developer</span>`;
  const text3 = `<span>Student</span>`;
  const classTypeWritter =
    "text-light-grey text-lg md:text-xl lg:text-3xl font-medium";

  return (
    <main className="flex flex-grow flex-col-reverse justify-end md:flex-row md:justify-between items-center padding">
      <Fade
        ml={-200}
        delay={300}
        className="flex flex-col flex-grow w-full text-center md:w-2/5 md:text-left"
      >
        <h1 className="text-light-blue text-xl md:text-3xl lg:text-5xl font-bold">
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
        <div className="flex flex-grow justify-center space-x-10 md:justify-start md:pt-10">
          {CONTACTS.map((contact) => (
            <CardContact
              key={contact.id}
              contact={contact}
              className="h-7 md:h-10 lg:h-12"
            />
          ))}
        </div>
      </Fade>
      <Fade mr={-200} delay={500} className="w-full md:w-3/5 py-5 md:py-0">
        <AnimationLottie
          type="coding"
          width={width <= 768 ? "60%" : "65%"}
          height={width <= 768 ? "60%" : "65%"}
        />
      </Fade>
    </main>
  );
}
