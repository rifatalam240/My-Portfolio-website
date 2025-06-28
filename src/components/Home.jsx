import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './Hero'
import About from './AboutMe'
import MySkills from './MySkills'
import EducationQualification from './EducationQualification'

const Home = () => {
  return (
    <div className='lg:w-6xl  mx-auto'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <MySkills></MySkills>
        <EducationQualification></EducationQualification>
    </div>
  )
}

export default Home