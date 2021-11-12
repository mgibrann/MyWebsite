import { useState } from "react";
import { NavLink } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Fade from "../../utils/Fade";

export default function Header(props) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = (type) => type === "btn" && setIsOpen((prev) => !prev);

  const Navigation = (props) => (
    <>
      <NavLink
        to="/blog"
        className="animation-link"
        onClick={closeNav.bind(null, props.type)}
      >
        Blog
      </NavLink>
      <NavLink
        to="/projects"
        className="animation-link"
        onClick={closeNav.bind(null, props.type)}
      >
        Project
      </NavLink>
      <NavLink
        to="/about"
        className="animation-link"
        onClick={closeNav.bind(null, props.type)}
      >
        About
      </NavLink>
    </>
  );

  const Hamburger = () => (
    <>
      <button onClick={closeNav.bind(null, "btn")}>
        {isOpen ? (
          <Fade delay={300}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-light-blue"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Fade>
        ) : (
          <Fade delay={300}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-light-blue"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </Fade>
        )}
      </button>
    </>
  );

  const Nav = (props) => (
    <nav className="bg-light-white bg-opacity-60 backdrop-filter backdrop-blur-lg flex py-3 justify-between items-center padding shadow-sm">
      <p className="text-light-blue text-xl w-3/6 md:w-4/6 md:text-2xl lg:text-3xl font-bold">
        <NavLink
          to="/"
          className="animation-link"
          onClick={() => setIsOpen(false)}
        >
          gib
        </NavLink>
      </p>
      {props.children}
    </nav>
  );

  const Mobile = () => (
    <>
      <Nav>
        <Hamburger />
      </Nav>
      <Fade
        mt={-200}
        reverse={!isOpen}
        className="flex flex-col items-center w-full absolute font-medium bg-light-white bg-opacity-60 backdrop-filter backdrop-blur-lg"
      >
        <Navigation type="btn" />
      </Fade>
    </>
  );

  const Desktop = () => (
    <Nav>
      <div className="flex w-2/6 text-base lg:text-lg font-medium justify-between text-light-grey">
        <Navigation />
      </div>
    </Nav>
  );

  return (
    <Fade type="header" mt={-100} className="sticky top-0 z-30">
      {width >= 768 ? <Desktop /> : <Mobile />}
    </Fade>
  );
}
