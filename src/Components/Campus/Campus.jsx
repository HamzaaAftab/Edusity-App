import React from 'react'
import "./Campus.css"
import gallery1 from "../../assets/gallery-1.png"
import gallery2 from "../../assets/gallery-2.png"
import gallery3 from "../../assets/gallery-3.png"
import gallery4 from "../../assets/gallery-4.png"
import whitearrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className="campus mt-10 mx-auto w-[90%] text-center ">
        <div className="gallery flex items-center justify-between mb-10">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button><a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-700 rounded-md hover:bg-slate-50 hover:text-black hover:outline-2 hover:outline-black sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
See More Here
<svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a></button>
    </div>
  )
}

export default Campus
