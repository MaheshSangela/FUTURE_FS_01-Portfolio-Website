import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = "hover:text-yellow-400 flex items-center";

  return (
    <div className="fixed top-0 z-50 w-full bg-gray-900 text-white shadow-xl">
      <div className="flex items-center justify-between flex-wrap px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold ">Portfolio</h1>
 
        {/* Hamburger Icon */}

        <i className="fa-solid fa-bars cursor-pointer  md:!hidden"
          onClick={() => setMenuOpen(!menuOpen)}></i>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400  px-3 py-2"
                : "hover:text-yellow-400 px-3 py-2 rounded "
            } >Home</NavLink>
          <NavLink to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400  px-3 py-2"
                : "hover:text-yellow-400 px-3 py-2 rounded "
            }> About</NavLink>
          <NavLink to="/education"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400  px-3 py-2"
                : "hover:text-yellow-400 px-3 py-2 rounded "
            }>Education</NavLink>
          <NavLink to="/skill"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400  px-3 py-2"
                : "hover:text-yellow-400 px-3 py-2 rounded "
            }>Skills</NavLink>
          <NavLink to="/project" className={({ isActive }) =>
            isActive
              ? "text-yellow-400  px-3 py-2"
              : "hover:text-yellow-400 px-3 py-2 rounded "
          }>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? "text-yellow-400  px-3 py-2"
              : "hover:text-yellow-400 px-3 py-2 rounded "
          }>Contact</NavLink>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 bg-gray-600 gap-3 font-semibold">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/education" className={navLinkClass} onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to="/skill" className={navLinkClass} onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/project" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>

        </div>
      )}
    </div>
  );
};

export default Navbar;
