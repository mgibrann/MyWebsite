import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const active = "active-nav";
  return (
    <header className="sticky top-0 z-5">
      <div className="bg-white p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg flex py-3 px-20 justify-between items-center">
        <p className=" text-blue-500 text-4xl font-bold">
          <Link to="/">Gib</Link>
        </p>
        <nav className="flex text-lg font-medium">
          <NavLink to="/blog" activeClassName={active}>
            Blog
          </NavLink>
          <NavLink to="/project" activeClassName={active} className="px-8">
            Project
          </NavLink>
          <NavLink to="/about" activeClassName={active}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
