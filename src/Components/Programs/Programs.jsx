import React from 'react';
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs mt-10 mx-auto w-[92%] flex flex-col md:flex-row items-center justify-between">
      <div className="program mb-8 md:mb-0 md:w-1/3">
        <img src={program_1} alt="" className="w-full rounded-[8px] block" />
        <div className="caption flex flex-col items-center">
          <img src={program_icon_1} alt="" className="w-[40px] sm:w-[50px]" />
          <p className="text-center">Graduation Degree</p>
        </div>
      </div>

      <div className="program mb-8 md:mb-0 md:w-1/3">
        <img src={program_2} alt="" className="w-full rounded-[8px] block" />
        <div className="caption flex flex-col items-center">
          <img src={program_icon_2} alt="" className="w-[40px] sm:w-[50px]" />
          <p className="text-center">Master Degree</p>
        </div>
      </div>

      <div className="program md:w-1/3">
        <img src={program_3} alt="" className="w-full rounded-[8px] block" />
        <div className="caption flex flex-col items-center">
          <img src={program_icon_3} alt="" className="w-[40px] sm:w-[50px]" />
          <p className="text-center">Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
