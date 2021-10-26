import { NavLink } from "react-router-dom";

const Header = () => {
  const active = "active-nav";

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-light-white bg-opacity-60 backdrop-filter backdrop-blur-lg flex py-3 justify-between items-center padding">
        <p className="text-light-blue text-xl w-3/6 md:w-4/6 md:text-2xl lg:text-4xl font-bold">
          <NavLink to="/" className="animation-link" activeClassName={active}>
            gib
          </NavLink>
        </p>
        <nav className="flex text-sm w-3/6 md:w-2/6 md:text-base lg:text-xl font-medium justify-between text-light-grey">
          <NavLink
            to="/blog"
            className="animation-link"
            activeClassName={active}
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            className="animation-link"
            activeClassName={active}
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="animation-link"
            activeClassName={active}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
