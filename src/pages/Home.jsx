import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const classes = "text-typewritter";
  const text1 = `<span class=${classes}>Gibran's a Web Developer</span>`;
  const text2 = `<span class=${classes}>Mobile Developer</span>`;
  const text3 = `<span class=${classes}>Student</span>`;
  const text4 = `<span class=${classes}>Thanks For Visiting, Pleased To Meet You!</span>`;
  return (
    <main className="flex flex-grow flex-col justify-center items-center px-20">
      <h1 className="text-light-blue text-4xl font-extrabold py-3">
        Hi! I'm Muhamad Taopik Gibran. 21 Years Old.
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
            .pauseFor(1000)
            .deleteAll()
            .typeString(text4)
            .pauseFor(5000)
            .start();
        }}
        options={{
          loop: true,
          cursorClassName: `Typewriter__cursor ${classes}`,
        }}
      />
    </main>
  );
};

export default Home;
