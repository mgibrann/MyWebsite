import { NavLink } from "react-router-dom";

const Header = () => {
  const active = "active-nav";

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-light-white p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg flex py-3 px-20 justify-between items-center">
        <p className=" text-light-blue text-4xl font-bold">
          <NavLink to="/" className="animation-link" activeClassName={active}>
            gib
          </NavLink>
        </p>
        <nav className="flex text-lg font-medium w-1/4 justify-around text-light-grey">
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
