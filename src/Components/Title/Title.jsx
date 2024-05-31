import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className="title text-center text-[16px] font-semibold uppercase ">
      <p className="text-2xl text-center text-blue-900">{props.subtitle}</p>
      <h2 className="text-[45px] text-gray-700 ">{props.title}</h2>
    </div>
  )
}

export default Title
