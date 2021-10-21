import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const classes = "text-typewritter";
  const text1 = `<h1 class=${classes}>Web Developer</h1>`;
  const text2 = `<h1 class=${classes}>Mobile Developer</h1>`;
  const text3 = `<h1 class=${classes}>Student</h1>`;
  return (
    <div>
      <h1 className="text-blue-500 text-6xl font-extrabold text-center">
        Hi Im Muhamad Taopik Gibran, call me Gibran. 21 Years Old.
      </h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString(text1)
            .pauseFor(1000)
            .deleteChars(13)
            .typeString(text2)
            .pauseFor(1000)
            .deleteChars(16)
            .typeString(text3)
            .pauseFor(1000)
            .start();
        }}
        options={{
          loop: true,
          cursorClassName: `Typewriter__cursor ${classes}`,
          // wrapperClassName: "type-writter-wrapper",
        }}
      />
    </div>
  );
};

export default Home;
