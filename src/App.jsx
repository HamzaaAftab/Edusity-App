import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact  from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className={`container1`}>
    <Title subtitle="Our Program" title="What We Offer"/>
    <Programs></Programs>
    <About></About>
    <Title subtitle="Gallery" title="Campus Photos"/>
    <Campus></Campus>
    <Title subtitle="Testimonials" title="What Student Says"/>
    <Testimonials></Testimonials>
    <Title subtitle="Contact Us" title="Get In Touch"/>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
