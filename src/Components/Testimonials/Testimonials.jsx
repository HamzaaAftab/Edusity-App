import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"


const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
      if(tx>-50){ // Adjusting for more items
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
      if(tx<0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
      <div className="testimonials my-8 mx-auto py-0 px-5 sm:px-10 lg:px-20 relative max-w-screen-lg">
        <img src={next_icon} alt="Next" className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 p-3 w-12 rounded-full cursor-pointer bg-blue-800" onClick={slideForward} />
        <img src={back_icon} alt="Back" className="back-btn absolute left-0 top-1/2 transform -translate-y-1/2 p-3 w-12 rounded-full cursor-pointer bg-blue-800" onClick={slideBackward} />
        <div className="slider overflow-hidden">
          <ul ref={slider} className="flex w-full transition-transform duration-500 ease-in-out">
            <li className="w-full sm:w-1/2 p-5">
              <div className="slide shadow-lg p-10 rounded-lg text-gray-700 leading-tight">
                <div className="user-info flex items-center mb-5 text-sm">
                  <img src={user_1} alt="User 1" className="w-24 rounded-full mr-3 border-4 border-blue-800" />
                  <div>
                    <h3 className="text-blue-800 text-xl font-semibold">William Jackson</h3>
                    <span className="text-lg">Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li className="w-full sm:w-1/2 p-5">
              <div className="slide shadow-lg p-10 rounded-lg text-gray-700 leading-tight">
                <div className="user-info flex items-center mb-5 text-sm">
                  <img src={user_2} alt="User 2" className="w-24 rounded-full mr-3 border-4 border-blue-800" />
                  <div>
                    <h3 className="text-blue-800 text-xl font-semibold">William Jackson</h3>
                    <span className="text-lg">Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li className="w-full sm:w-1/2 p-5">
              <div className="slide shadow-lg p-10 rounded-lg text-gray-700 leading-tight">
                <div className="user-info flex items-center mb-5 text-sm">
                  <img src={user_3} alt="User 3" className="w-24 rounded-full mr-3 border-4 border-blue-800" />
                  <div>
                    <h3 className="text-blue-800 text-xl font-semibold">William Jackson</h3>
                    <span className="text-lg">Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li className="w-full sm:w-1/2 p-5">
              <div className="slide shadow-lg p-10 rounded-lg text-gray-700 leading-tight">
                <div className="user-info flex items-center mb-5 text-sm">
                  <img src={user_4} alt="User 4" className="w-24 rounded-full mr-3 border-4 border-blue-800" />
                  <div>
                    <h3 className="text-blue-800 text-xl font-semibold">William Jackson</h3>
                    <span className="text-lg">Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Testimonials
