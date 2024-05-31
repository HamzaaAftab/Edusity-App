import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";




const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [])


  return (
    <nav
      className={`w-[100%] px-6 py-3 fixed top-0 left-0 flex items-center justify-between z-10 container1 text-white ${sticky? 'dark-nav' : ` `}`}
    >
      <img src={logo} alt="" className={`w-[200px]`} />
      <ul
        className={`flex list-none my-[5px] mx-[2px] text-[17px] gap-9 font-medium items-center `}
      >
        <li>
        <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Program</a>
        </li>
        <li>
          <a href="#">About Us </a>
        </li>
        <li>
          <a href="#">Campus</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a
            href="#_"
            class="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all  rounded-full hover:bg-white group"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Contact us
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
