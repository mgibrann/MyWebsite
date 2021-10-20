import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-400 flex">
      <h1 className="bg-white text-xl">Gib</h1>
      <nav className="flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
