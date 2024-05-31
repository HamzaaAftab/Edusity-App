import React from 'react';
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center justify-between my-[100px] mx-auto w-[90%] md:w-[90%]">
      <div className="about-left relative mb-8 md:mb-0 md:w-full flex justify-center">
        <img src={about_img} alt="About" className="about-img w-full rounded-md" />
        <img src={play_icon} alt="Play" className="play-icon w-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="about-right mt-2 w-full md:w-full text-center md:text-left">
        <h3 className="font-bold text-3xl text-blue-900">ABOUT UNIVERSITY</h3>
        <h2 className="font-semibold text-[24px] md:text-[29px] my-4">Nurturing Tomorrow's Leaders Today</h2>
        <p className="text-gray-800 text-base md:text-lg">
          Embark on a Transformative Educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education. Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
