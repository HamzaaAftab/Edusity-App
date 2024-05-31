import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-[100%] px-6 py-3 fixed top-0 left-0 flex items-center justify-between z-10 container1 text-white ${
        sticky ? "dark-nav" : ``
      }`}
    >
      <img src={logo} alt="Logo" className="w-[200px]" />
      <ul className="flex list-none my-[5px] mx-[2px] text-[17px] gap-9 font-medium items-center">
        <li>
          <Link to="heroo" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} duration={500} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} duration={500} offset={-260}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-260} className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Contact us
            </span>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
